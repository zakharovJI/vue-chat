export interface Message {
  message: string;
  time: string;
}

export interface ChatMessage extends Message{
  source: number;
  destination: number;
}