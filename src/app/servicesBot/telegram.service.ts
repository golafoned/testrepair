import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
    private botToken: string = '7897621416:AAEhh5AajB22bRezePnGiV0yC6F86QZzENE';
    private chatId: string = '1363148895';
    private apiUrl: string = `https://api.telegram.org/bot${this.botToken}/sendMessage`;
  
    constructor(private http: HttpClient) {}

    sendMessage(message: string): Observable<any> {
        const body = {
            chat_id: this.chatId,
            text: message,
            parse_mode: 'HTML'
        };
    
        return this.http.post(this.apiUrl, body).pipe(
            catchError(error => {
                console.error("Telegram API error:", error);
                return throwError(() => error);
            })
        );
    }
}