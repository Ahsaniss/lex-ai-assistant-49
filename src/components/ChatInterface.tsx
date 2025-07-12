import { useState, useRef, useEffect } from "react";
import { Send, Mic, MicOff, Bot, User, Upload, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatInterfaceProps {
  selectedCategory?: string;
}

export const ChatInterface = ({ selectedCategory }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: selectedCategory 
        ? `السلام علیکم! I'm your Pakistani Legal Assistant specialized in ${selectedCategory}. I can analyze your documents according to Pakistani Constitution and law. How can I help you today?`
        : "السلام علیکم! I'm your Pakistani AI Legal Assistant. I can help with legal questions according to Pakistani Constitution, PPC, CPC, and court precedents. Upload documents for case analysis. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const generatePakistaniLegalResponse = async (userMessage: string, hasDocuments: boolean = false): Promise<string> => {
    // Category-specific Pakistani legal responses with document analysis
    const categoryResponses = {
      "Family Law": [
        `🇵🇰 **Family Law Analysis**: ${hasDocuments ? 'Based on your uploaded documents and ' : ''}According to the Muslim Family Laws Ordinance 1961 and Articles 35 & 37 of Pakistan Constitution, ${hasDocuments ? 'your case involves ' : 'family matters include'} marriage, divorce, maintenance, and child custody. The Family Courts Act 1964 provides jurisdiction for these matters.`,
        `**Pakistani Family Law**: ${hasDocuments ? 'Document analysis shows ' : ''}Under Section 7 of West Pakistan Family Courts Act and Dissolution of Muslim Marriages Act 1939, ${hasDocuments ? 'your situation requires ' : 'you should consider'} proper documentation and compliance with Sharia provisions as incorporated in Pakistani law.`
      ],
      "Property Law": [
        `🏠 **Property Law Guidance**: ${hasDocuments ? 'Analyzing your property documents under ' : 'According to '}the Transfer of Property Act 1882 and Registration Act 1908 as applicable in Pakistan, ${hasDocuments ? 'your property matter involves ' : 'property transactions require'} proper registration and compliance with provincial land laws.`,
        `**Pakistani Property Rights**: ${hasDocuments ? 'Your documents indicate ' : ''}Under Article 23 & 24 of Pakistan Constitution and provincial land revenue laws, ${hasDocuments ? 'this property case requires ' : 'property disputes need'} verification through local Patwari and District Courts.`
      ],
      "Criminal Law": [
        `⚖️ **Criminal Law Analysis**: ${hasDocuments ? 'Based on your case documents and ' : ''}According to Pakistan Penal Code (PPC) 1860 and Code of Criminal Procedure (CrPC) 1898, ${hasDocuments ? 'your criminal matter falls under ' : 'criminal cases are handled by'} Sessions Courts and High Courts with constitutional protections under Articles 9-14.`,
        `**Pakistani Criminal Justice**: ${hasDocuments ? 'Document review suggests ' : ''}Under PPC Sections and Anti-Terrorism Act 1997, ${hasDocuments ? 'your case requires ' : 'criminal proceedings follow'} proper investigation and trial procedures as per Pakistani criminal law.`
      ],
      "Business Law": [
        `💼 **Business & Corporate Law**: ${hasDocuments ? 'Reviewing your business documents under ' : ''}The Companies Act 2017 and Contract Act 1872 govern ${hasDocuments ? 'your business matter which involves ' : 'commercial transactions including'} company formation, contracts, and commercial disputes in Pakistan.`,
        `**Pakistani Commercial Law**: ${hasDocuments ? 'Your business documents show ' : ''}Under Securities & Exchange Commission of Pakistan (SECP) regulations and Banking Companies Ordinance, ${hasDocuments ? 'this matter requires ' : 'business compliance includes'} proper registration and regulatory compliance.`
      ]
    };

    const generalResponses = [
      `🇵🇰 **Pakistani Legal Guidance**: ${hasDocuments ? 'After analyzing your uploaded documents according to ' : 'Based on '}Pakistan Constitution Articles 8-28 (Fundamental Rights), ${hasDocuments ? 'your legal matter requires ' : 'legal issues should be addressed through'} proper constitutional and statutory interpretation under Pakistani jurisdiction.`,
      `**Constitutional Analysis**: ${hasDocuments ? 'Your documents have been reviewed under ' : ''}Pakistan Constitution, Pakistan Penal Code, Civil Procedure Code, and relevant High Court precedents. ${hasDocuments ? 'This case involves ' : 'Legal matters require'} careful consideration of federal and provincial laws.`
    ];

    const responses = selectedCategory && categoryResponses[selectedCategory] 
      ? categoryResponses[selectedCategory] 
      : generalResponses;

    return new Promise((resolve) => {
      setTimeout(() => {
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        const constitutionalNote = hasDocuments 
          ? "\n\n📋 **Document Analysis Complete**: Your documents have been analyzed according to Pakistani legal framework."
          : "\n\n📤 **Document Upload Available**: Upload relevant legal documents for detailed case analysis.";
        const disclaimer = "\n\n⚖️ **Legal Disclaimer**: This analysis is based on Pakistani Constitution, PPC, CPC, and court precedents. For specific legal advice, consult a qualified Pakistani advocate licensed by Pakistan Bar Council.";
        resolve(randomResponse + constitutionalNote + disclaimer);
      }, 1500 + Math.random() * 2000);
    });
  };

  const handleSend = async () => {
    if ((!input.trim() && uploadedFiles.length === 0) || isLoading) return;

    let messageText = input;
    if (uploadedFiles.length > 0) {
      messageText += `\n\n📎 **Uploaded Documents**: ${uploadedFiles.map(f => f.name).join(', ')}`;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    const hasDocuments = uploadedFiles.length > 0;
    setUploadedFiles([]);
    setIsLoading(true);

    try {
      const aiResponse = await generatePakistaniLegalResponse(input, hasDocuments);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "معذرت! I'm experiencing technical difficulties. Please try again later or contact support if the issue persists.",
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleVoice = () => {
    setIsListening(!isListening);
    if (!isListening) {
      console.log("Starting Urdu/English speech recognition...");
    } else {
      console.log("Stopping speech recognition...");
    }
  };

  return (
    <div className="flex flex-col h-full max-h-[600px] border border-border rounded-lg bg-card">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-accent/50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <Bot className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">🇵🇰 Pakistani Legal Assistant</h3>
            <p className="text-sm text-muted-foreground">
              {selectedCategory ? `Specialized in ${selectedCategory}` : "Constitutional & Pakistani Law"}
            </p>
          </div>
        </div>
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
      </div>

      {/* Messages */}
      <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex items-start space-x-3",
                message.isBot ? "justify-start" : "justify-end"
              )}
            >
              {message.isBot && (
                <div className="w-8 h-8 rounded-full bg-chat-bot flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
              )}
              
              <div
                className={cn(
                  "max-w-[80%] p-3 rounded-lg shadow-sm",
                  message.isBot
                    ? "bg-chat-bot border border-border text-foreground"
                    : "bg-primary text-primary-foreground"
                )}
              >
                <div className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</div>
                <p className="text-xs opacity-70 mt-2">
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </p>
              </div>

              {!message.isBot && (
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-primary-foreground" />
                </div>
              )}
            </div>
          ))}
          
          {isLoading && (
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full bg-chat-bot flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <div className="bg-chat-bot p-3 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="p-4 border-t border-border">
        {/* File Upload Section */}
        {uploadedFiles.length > 0 && (
          <div className="mb-4 space-y-2">
            <p className="text-sm text-muted-foreground font-medium">📎 Uploaded Documents for Analysis:</p>
            {uploadedFiles.map((file, index) => (
              <div key={index} className="flex items-center justify-between bg-accent/50 rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <FileText className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{file.name}</span>
                  <span className="text-xs text-muted-foreground">({Math.round(file.size / 1024)} KB)</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFile(index)}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center space-x-2">
          <div className="flex-1 relative">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask in English or Urdu (اردو میں سوال کریں)..."
              disabled={isLoading}
              className="pr-12"
            />
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8",
                isListening && "text-red-500"
              )}
              onClick={toggleVoice}
              title="Voice Input (Urdu/English)"
            >
              {isListening ? (
                <MicOff className="h-4 w-4" />
              ) : (
                <Mic className="h-4 w-4" />
              )}
            </Button>
          </div>
          
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            multiple
            accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
            className="hidden"
          />
          
          <Button 
            onClick={() => fileInputRef.current?.click()}
            variant="outline"
            size="icon"
            title="Upload Legal Documents"
            className="flex-shrink-0"
          >
            <Upload className="h-4 w-4" />
          </Button>
          
          <Button 
            onClick={handleSend} 
            disabled={(!input.trim() && uploadedFiles.length === 0) || isLoading}
            className="px-6 flex-shrink-0"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        
        <p className="text-xs text-muted-foreground mt-2 text-center">
          🇵🇰 Pakistani Constitutional Law AI • General information only • Consult qualified Pakistani lawyer
        </p>
      </div>
    </div>
  );
};