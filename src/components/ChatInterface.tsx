import { useState, useRef, useEffect } from "react";
import { Send, Mic, MicOff, Bot, User, Copy, ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatInterfaceProps {
  selectedCategory?: string;
}

// Custom message component with better formatting
const MessageBubble = ({ message, onCopy, onFeedback }: { 
  message: Message, 
  onCopy: (text: string) => void,
  onFeedback: (messageId: string, type: 'like' | 'dislike') => void
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    onCopy(message.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "flex items-start space-x-3",
        message.isBot ? "justify-start" : "justify-end"
      )}
    >
      {message.isBot && (
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 flex items-center justify-center flex-shrink-0 shadow-lg border-2 border-white/20">
          <Bot className="w-6 h-6 text-white drop-shadow-sm" />
        </div>
      )}
      
      <div
        className={cn(
          "max-w-[85%] group",
          message.isBot ? "text-left" : "text-right"
        )}
      >
        <div
          className={cn(
            "p-6 rounded-3xl shadow-2xl border-0 transition-all duration-300 hover:shadow-3xl hover:scale-[1.02] backdrop-blur-sm",
            message.isBot
              ? "bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 text-slate-800 dark:text-white border border-blue-200 dark:border-indigo-400/30 shadow-blue-500/20 dark:shadow-indigo-500/20 rounded-bl-md"
              : "bg-gradient-to-br from-[#080278] via-[#1a1a9e] to-[#2d2daa] text-white rounded-br-md shadow-[#080278]/30 border border-white/20"
          )}
        >
          {message.isBot ? (
            <div className="prose prose-sm max-w-none prose-slate dark:prose-invert">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  h1: ({ children }) => <h1 className="text-xl font-bold mb-3 text-[#080278] dark:text-amber-300 bg-gradient-to-r from-[#080278] to-[#1a1a9e] dark:from-yellow-400 dark:to-orange-400 bg-clip-text text-transparent">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-lg font-semibold mb-3 text-[#080278] dark:text-cyan-300">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-base font-medium mb-2 text-[#1a1a9e] dark:text-emerald-300">{children}</h3>,
                  p: ({ children }) => <p className="mb-3 last:mb-0 text-sm leading-relaxed text-slate-700 dark:text-slate-200">{children}</p>,
                  ul: ({ children }) => <ul className="list-disc ml-4 mb-3 space-y-1">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal ml-4 mb-3 space-y-1">{children}</ol>,
                  li: ({ children }) => <li className="text-sm text-slate-700 dark:text-slate-200">{children}</li>,
                  strong: ({ children }) => <strong className="font-semibold text-[#080278] dark:text-amber-300">{children}</strong>,
                  em: ({ children }) => <em className="italic text-slate-600 dark:text-indigo-300">{children}</em>,
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-[#080278] dark:border-cyan-400 pl-4 italic bg-[#080278]/10 dark:bg-slate-800/50 p-3 rounded-r-lg mb-3 text-[#080278] dark:text-cyan-200">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children }) => (
                    <code className="bg-[#080278]/10 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono text-[#080278] dark:text-amber-300 border border-[#080278]/20 dark:border-slate-600">
                      {children}
                    </code>
                  ),
                  pre: ({ children }) => (
                    <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto text-xs font-mono mb-3 border border-[#080278]/20 dark:border-slate-600 text-slate-800 dark:text-slate-200">
                      {children}
                    </pre>
                  ),
                }}
              >
                {message.text}
              </ReactMarkdown>
            </div>
          ) : (
            <div className="text-sm leading-relaxed whitespace-pre-wrap text-white">
              {message.text}
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between mt-2 px-2">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {message.timestamp.toLocaleTimeString([], { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </p>
          
          {message.isBot && (
            <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="h-8 w-8 p-0 text-gray-400 hover:text-[#080278] hover:bg-[#080278]/10 dark:hover:bg-slate-700 rounded-full transition-all"
                title="Copy message"
              >
                <Copy className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onFeedback(message.id, 'like')}
                className="h-8 w-8 p-0 text-gray-400 hover:text-green-600 hover:bg-green-50 dark:hover:bg-slate-700 rounded-full transition-all"
                title="Good response"
              >
                <ThumbsUp className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onFeedback(message.id, 'dislike')}
                className="h-8 w-8 p-0 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-slate-700 rounded-full transition-all"
                title="Poor response"
              >
                <ThumbsDown className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>

      {!message.isBot && (
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#080278] via-[#1a1a9e] to-[#2d2daa] flex items-center justify-center flex-shrink-0 shadow-lg border-2 border-white/20">
          <User className="w-6 h-6 text-white drop-shadow-sm" />
        </div>
      )}
    </div>
  );
};

// Initialize Google AI with your API key
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_API_KEY || "AIzaSyDWb-XSQKC-LraQ6R0KnfodNgXLaBlea2k");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const ChatInterface = ({ selectedCategory }: ChatInterfaceProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState<'english' | 'urdu' | 'both'>('both');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: selectedCategory 
        ? `السلام علیکم! I'm your Pakistani Legal Assistant **Advocaid** specialized in ${selectedCategory}. I can help with legal questions according to Pakistani Constitution and law. Select your preferred language above and ask your question.\n\nآپ کی قانونی مدد کے لیے یہاں موجود ہوں۔ اوپر سے اپنی زبان کا انتخاب کریں اور سوال پوچھیں۔`
        : "السلام علیکم! I'm your Pakistani AI Legal Assistant **Advocaid**. I can help with legal questions according to Pakistani Constitution, PPC, CPC, and court precedents. Select your preferred language above and ask your question.\n\nآپ کی قانونی مدد کے لیے یہاں موجود ہوں۔ اوپر سے اپنی زبان کا انتخاب کریں اور سوال پوچھیں۔",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

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

  // Update welcome message when language changes
  useEffect(() => {
    const getWelcomeMessage = () => {
      if (selectedLanguage === 'english') {
        return selectedCategory 
          ? `Welcome! I'm your Pakistani Legal Assistant **Advocaid** specialized in ${selectedCategory}. I can help with legal questions according to Pakistani Constitution and law. How can I help you today?`
          : "Welcome! I'm your Pakistani AI Legal Assistant **Advocaid**. I can help with legal questions according to Pakistani Constitution, PPC, CPC, and court precedents. How can I assist you today?";
      } else if (selectedLanguage === 'urdu') {
        return selectedCategory 
          ? `السلام علیکم! میں آپ کا پاکستانی قانونی مددگار **Advocaid** ہوں جو ${selectedCategory} میں مہارت رکھتا ہے۔ میں پاکستانی آئین اور قانون کے مطابق قانونی سوالات میں مدد کر سکتا ہوں۔ آج میں آپ کی کیسے مدد کر سکتا ہوں؟`
          : "السلام علیکم! میں آپ کا پاکستانی AI قانونی مددگار **Advocaid** ہوں۔ میں پاکستانی آئین، PPC، CPC اور عدالتی نظائر کے مطابق قانونی سوالات میں مدد کر سکتا ہوں۔ میں آپ کی کیسے مدد کر سکتا ہوں؟";
      } else {
        return selectedCategory 
          ? `السلام علیکم! I'm your Pakistani Legal Assistant **Advocaid** specialized in ${selectedCategory}. I can help with legal questions according to Pakistani Constitution and law.\n\nآپ کی قانونی مدد کے لیے یہاں موجود ہوں۔ How can I help you today?`
          : "السلام علیکم! I'm your Pakistani AI Legal Assistant **Advocaid**. I can help with legal questions according to Pakistani Constitution, PPC, CPC, and court precedents.\n\nآپ کی قانونی مدد کے لیے یہاں موجود ہوں۔ How can I assist you today?";
      }
    };

    setMessages(prev => [{
      id: "1",
      text: getWelcomeMessage(),
      isBot: true,
      timestamp: new Date(),
    }, ...prev.slice(1)]);
  }, [selectedLanguage, selectedCategory]);

  const handleCopyMessage = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  const handleFeedback = (messageId: string, type: 'like' | 'dislike') => {
    console.log(`Feedback for message ${messageId}: ${type}`);
    // You could store this feedback for improving the AI
  };

  const generatePakistaniLegalResponse = async (userMessage: string): Promise<string> => {
    try {
      console.log('🔍 Generating AI response for:', userMessage);
      console.log('📊 API Key available:', !!import.meta.env.VITE_GOOGLE_AI_API_KEY);
      console.log('🎯 Selected category:', selectedCategory);

      // Create a specialized prompt based on the selected category
      const categoryContext = {
        "Family Law": "You are Advocaid, a Pakistani Legal Assistant specialized in Family Law. Focus on Muslim Family Laws Ordinance 1961, Articles 35 & 37 of Pakistan Constitution, Family Courts Act 1964, Dissolution of Muslim Marriages Act 1939, and Sharia provisions as incorporated in Pakistani law.",
        "Property Law": "You are Advocaid, a Pakistani Legal Assistant specialized in Property Law. Focus on Transfer of Property Act 1882, Registration Act 1908, Articles 23 & 24 of Pakistan Constitution, provincial land laws, and property registration requirements in Pakistan.",
        "Criminal Law": "You are Advocaid, a Pakistani Legal Assistant specialized in Criminal Law. Focus on Pakistan Penal Code (PPC) 1860, Code of Criminal Procedure (CrPC) 1898, Anti-Terrorism Act 1997, Articles 9-14 of Pakistan Constitution, and criminal justice procedures in Pakistan.",
        "Business Law": "You are Advocaid, a Pakistani Legal Assistant specialized in Business & Corporate Law. Focus on Companies Act 2017, Contract Act 1872, SECP regulations, Banking Companies Ordinance, and commercial law in Pakistan."
      };

      const systemPrompt = selectedCategory && categoryContext[selectedCategory] 
        ? categoryContext[selectedCategory]
        : "You are Advocaid, a Pakistani Legal Assistant with expertise in Pakistani Constitutional Law, Pakistan Penal Code, Civil Procedure Code, and Pakistani court precedents.";

      // Language-specific instructions
      const languageInstructions = {
        'english': "Please respond ONLY in English. Do not use any Urdu text.",
        'urdu': "Please respond ONLY in Urdu (اردو). Do not use any English text except for legal terms that don't have Urdu equivalents.",
        'both': "Please provide a comprehensive response in both English and Urdu where appropriate. Use both languages naturally."
      };

      const prompt = `${systemPrompt}

Language Preference: ${languageInstructions[selectedLanguage]}

User Question: ${userMessage}

Please provide a comprehensive legal response following these guidelines:
1. Start with a relevant Pakistani flag emoji (🇵🇰) and introduce yourself as Advocaid
2. Reference specific Pakistani laws, acts, and constitutional articles
3. Provide practical legal guidance according to Pakistani jurisdiction
4. Include relevant court procedures and jurisdictions
5. Use Islamic/Urdu greetings where appropriate (السلام علیکم, etc.)
6. Be professional yet accessible for Pakistani clients
7. Follow the language preference specified above
8. If you are unsure about an answer, politely decline and suggest consulting a qualified Pakistani lawyer.

Format your response with proper headings and structure for easy reading.`;

      console.log('📝 Sending prompt to Gemini API...');
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      console.log('✅ AI Response received successfully');
      console.log('📄 Response length:', text.length);
      
      // Add legal disclaimer
      const disclaimer = "\n\n⚖️ **Legal Disclaimer**: This analysis is provided by Advocaid and is based on Pakistani Constitution, relevant laws, and court precedents. For specific legal advice, consult a qualified Pakistani advocate licensed by Pakistan Bar Council.";
      
      return text + disclaimer;
    } catch (error) {
      console.error('❌ Error generating AI response:', error);
      console.error('🔍 Error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
      
      // Check if it's an API key issue
      if (error.message && error.message.includes('API_KEY')) {
        console.error('🔑 API Key Issue detected');
        return `🇵🇰 **Advocaid - API Configuration Error**: There seems to be an issue with the AI service configuration. Please check the API key setup.\n\n⚖️ **Legal Disclaimer**: This analysis is provided by Advocaid and is based on Pakistani Constitution, relevant laws, and court precedents. For specific legal advice, consult a qualified Pakistani advocate licensed by Pakistan Bar Council.`;
      }
      
      // Check if it's a network issue
      if (error.message && (error.message.includes('fetch') || error.message.includes('network'))) {
        console.error('🌐 Network Issue detected');
        return `🇵🇰 **Advocaid - Network Error**: Unable to connect to the AI service. Please check your internet connection and try again.\n\n⚖️ **Legal Disclaimer**: This analysis is provided by Advocaid and is based on Pakistani Constitution, relevant laws, and court precedents. For specific legal advice, consult a qualified Pakistani advocate licensed by Pakistan Bar Council.`;
      }
      
      // Fallback response if AI fails
      const fallbackResponse = selectedCategory 
        ? `🇵🇰 **Advocaid - ${selectedCategory} Legal Guidance**: I apologize, but I'm experiencing technical difficulties with the AI service. Error: ${error.message}. Please try again in a moment. For immediate assistance, please consult a qualified Pakistani advocate specializing in ${selectedCategory}.`
        : `🇵🇰 **Advocaid - Pakistani Legal Guidance**: I apologize, but I'm experiencing technical difficulties with the AI service. Error: ${error.message}. Please try again in a moment. For immediate assistance, please consult a qualified Pakistani advocate.`;
      
      return fallbackResponse + "\n\n⚖️ **Legal Disclaimer**: This analysis is provided by Advocaid and is based on Pakistani Constitution, relevant laws, and court precedents. For specific legal advice, consult a qualified Pakistani advocate licensed by Pakistan Bar Council.";
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setIsTyping(true);

    try {
      const aiResponse = await generatePakistaniLegalResponse(input);
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
        text: "معذرت! I'm Advocaid and I'm experiencing technical difficulties. Please try again later or contact support if the issue persists.",
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      setIsTyping(false);
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
    <div className="flex flex-col h-full max-h-[600px] border-0 rounded-xl bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-indigo-900 dark:to-purple-900 shadow-2xl overflow-hidden backdrop-blur-sm">
      {/* Chat Header */}
      <div className="border-b-0 bg-gradient-to-r from-[#080278] via-[#1a1a9e] to-[#2d2daa] text-white shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#080278]/20 via-[#1a1a9e]/20 to-[#2d2daa]/20 backdrop-blur-sm"></div>
        
        {/* Main Header Row */}
        <div className="flex items-center justify-between p-4 relative z-10">
          <div className="flex items-center space-x-3 flex-1 min-w-0">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg border-2 border-white/30 flex-shrink-0">
              <Bot className="w-7 h-7 text-white drop-shadow-sm" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-bold text-lg text-white flex items-center space-x-2 drop-shadow-sm">
                <span>🇵🇰 Advocaid</span>
                {selectedCategory && (
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30 shadow-sm hidden sm:inline">
                    {selectedCategory}
                  </span>
                )}
              </h3>
              <p className="text-sm text-white/80 truncate">
                {selectedCategory ? `Specialized in ${selectedCategory}` : "Pakistani Legal AI Assistant"}
              </p>
            </div>
          </div>
          
          {/* Desktop Status */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="w-3 h-3 bg-lime-400 rounded-full animate-pulse shadow-sm" />
            <span className="text-xs text-lime-200 font-medium">Online</span>
          </div>
        </div>

        {/* Mobile-Friendly Language Selection Bar */}
        <div className="px-4 pb-3 flex items-center justify-between relative z-10">
          <div className="flex items-center space-x-2 flex-1">
            <span className="text-xs text-white/80 font-medium">Language:</span>
            <select 
              value={selectedLanguage} 
              onChange={(e) => setSelectedLanguage(e.target.value as 'english' | 'urdu' | 'both')}
              className="text-xs bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all min-w-0 flex-1 max-w-[200px]"
            >
              <option value="both" className="text-gray-800">🌐 Both (English + اردو)</option>
              <option value="english" className="text-gray-800">🇬🇧 English Only</option>
              <option value="urdu" className="text-gray-800">🇵🇰 اردو Only</option>
            </select>
          </div>
          
          {/* Mobile Status */}
          <div className="flex md:hidden items-center space-x-2">
            <div className="w-3 h-3 bg-lime-400 rounded-full animate-pulse shadow-sm" />
            <span className="text-xs text-lime-200 font-medium">Online</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea ref={scrollAreaRef} className="flex-1 p-6 bg-gradient-to-b from-white/80 to-slate-50/80 dark:from-slate-800/50 dark:to-slate-900/70 backdrop-blur-sm">
        <div className="space-y-6">
          {messages.map((message) => (
            <MessageBubble
              key={message.id}
              message={message}
              onCopy={handleCopyMessage}
              onFeedback={handleFeedback}
            />
          ))}
          
          {isLoading && (
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 flex items-center justify-center shadow-lg border-2 border-white/20">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-800 dark:via-indigo-800 dark:to-slate-900 border border-blue-200 dark:border-indigo-400/30 p-5 rounded-2xl rounded-bl-md shadow-lg max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#080278] to-[#1a1a9e] rounded-full animate-bounce" />
                    <div className="w-3 h-3 bg-gradient-to-r from-[#1a1a9e] to-[#2d2daa] rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                    <div className="w-3 h-3 bg-gradient-to-r from-[#2d2daa] to-[#080278] rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
                  </div>
                  <div className="text-sm text-slate-700 dark:text-cyan-200 font-medium">
                    {isTyping ? "Advocaid is analyzing..." : "Advocaid is thinking..."}
                  </div>
                </div>
                <div className="mt-3">
                  <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#080278] via-[#1a1a9e] to-[#2d2daa] animate-pulse rounded-full transition-all duration-1000" style={{ width: isTyping ? "85%" : "55%" }} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="p-4 border-t border-slate-200 dark:border-slate-600/50 bg-gradient-to-r from-white/80 via-slate-50/80 to-white/80 dark:from-slate-800/80 dark:via-slate-900/80 dark:to-slate-800/80 backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <div className="flex-1 relative">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={
                selectedLanguage === 'english' ? "Ask Advocaid your legal question in English..." :
                selectedLanguage === 'urdu' ? "Advocaid سے اردو میں اپنا قانونی سوال پوچھیں..." :
                "Ask Advocaid in English or Urdu (اردو میں سوال کریں)..."
              }
              disabled={isLoading}
              className="pr-12 h-12 text-sm placeholder:text-slate-500 dark:placeholder:text-slate-400 border-slate-300 dark:border-slate-600/50 focus:border-[#080278] dark:focus:border-amber-400/50 transition-colors bg-white/80 dark:bg-slate-800/50 text-slate-800 dark:text-slate-200 backdrop-blur-sm"
            />
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "absolute right-1 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full transition-colors",
                isListening ? "text-red-500 bg-red-100 dark:bg-red-500/20 hover:bg-red-200 dark:hover:bg-red-500/30" : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/50"
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
          
          <Button 
            onClick={handleSend} 
            disabled={!input.trim() || isLoading}
            className="h-12 px-6 bg-gradient-to-r from-[#080278] to-[#1a1a9e] hover:from-[#1a1a9e] hover:to-[#2d2daa] disabled:from-slate-400 disabled:to-slate-500 dark:disabled:from-slate-700 dark:disabled:to-slate-600 transition-all duration-200 shadow-lg text-white border-0"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Sending...</span>
              </div>
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </div>
        
        <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 text-center">
          🇵🇰 Advocaid - Pakistani Constitutional Law AI • 
          {selectedLanguage === 'english' ? ' English responses' : 
           selectedLanguage === 'urdu' ? ' اردو جوابات' : 
           ' Bilingual responses'} • 
          General information only • Consult qualified Pakistani lawyer
        </p>
      </div>
    </div>
  );
};