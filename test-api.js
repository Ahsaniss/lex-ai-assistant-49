// Simple test to verify Google Gemini API key
import { GoogleGenerativeAI } from '@google/generative-ai';

async function testAPI() {
  try {
    console.log('🔍 Testing Google Gemini API...');
    
    // Your API key
    const apiKey = 'AIzaSyDWb-XSQKC-LraQ6R0KnfodNgXLaBlea2k';
    
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // First, let's list available models
    console.log('📋 Listing available models...');
    try {
      const models = await genAI.listModels();
      console.log('Available models:');
      models.forEach(model => {
        console.log(`- ${model.name} (${model.displayName})`);
      });
    } catch (listError) {
      console.log('Could not list models:', listError.message);
    }
    
    // Try with the correct model name
    console.log('📝 Testing with gemini-1.5-flash model...');
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const prompt = "Hello, please respond with a simple greeting in both English and Urdu.";
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    console.log('✅ API Response received:');
    console.log(text);
    console.log('🎉 API Key is working correctly!');
    
  } catch (error) {
    console.error('❌ API Test failed:');
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    
    // Try alternative model names
    console.log('🔄 Trying alternative models...');
    try {
      const genAI = new GoogleGenerativeAI('AIzaSyDWb-XSQKC-LraQ6R0KnfodNgXLaBlea2k');
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
      const result = await model.generateContent("Test");
      const response = await result.response;
      const text = response.text();
      console.log('✅ gemini-1.5-pro works!');
      console.log('Response:', text);
    } catch (error2) {
      console.error('❌ gemini-1.5-pro also failed:', error2.message);
    }
  }
}

testAPI();
