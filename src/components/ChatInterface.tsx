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
    // Simulate Pakistani legal AI response
    const pakistaniLegalResponses = [
      `According to Article ${Math.floor(Math.random() * 280) + 1} of the Constitution of Pakistan, ${hasDocuments ? 'and based on your uploaded documents, ' : ''}here's the legal guidance: The Pakistani legal system is based on common law principles with Islamic law provisions. ${selectedCategory ? `For ${selectedCategory} matters, ` : ''}I recommend consulting the relevant Pakistani statutes and High Court precedents.`,
      
      `Under Pakistani law and the Pakistan Penal Code (PPC), ${hasDocuments ? 'your documents indicate that ' : ''}this matter falls under federal/provincial jurisdiction. ${selectedCategory ? `In ${selectedCategory} law, ` : ''}you should consider the Civil Procedure Code (CPC) provisions and seek advice from a qualified Pakistani advocate.`,
      
      `Based on Pakistani constitutional law and court precedents, ${hasDocuments ? 'your case documents suggest ' : ''}the following legal considerations apply. The Supreme Court of Pakistan and High Courts have established precedents that may be relevant. ${selectedCategory ? `For ${selectedCategory} matters, ` : ''}please consult with a local lawyer familiar with Pakistani jurisdiction.`,
      
      `In accordance with Islamic provisions in the Constitution of Pakistan, ${hasDocuments ? 'analyzing your documents shows ' : ''}this legal matter requires careful consideration of both federal and provincial laws. The relevant statutes include the Pakistan Penal Code, Family Laws Ordinance, and Companies Act as applicable.`
    ];

    return new Promise((resolve) => {
      setTimeout(() => {
        const randomResponse = pakistaniLegalResponses[Math.floor(Math.random() * pakistaniLegalResponses.length)];
        const disclaimer = "\n\n⚖️ **Important**: This is general legal information based on Pakistani law. For specific legal advice, please consult a qualified Pakistani lawyer or advocate. Laws may vary between provinces.";
        resolve(randomResponse + disclaimer);
      }, 1000 + Math.random() * 2000);
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