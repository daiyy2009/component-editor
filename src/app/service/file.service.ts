import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

declare var require: any;

@Injectable()
export class FileService {
  constructor(private http: HttpClient) { }
  baseUrl = "app/examples/";
  getFileContent(path?: string) {
    path = "slider-overview/slider-overview-example.html";
    return this.http.get(this.baseUrl + path, { responseType: 'text' });
  }
  writeFile(path: string, content: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    path = "slider-overview/slider-overview-example.html";
    return this.http.post("http://192.168.3.82:3000/save", { path, content }, httpOptions);
  }
}
