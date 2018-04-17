import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ReadFileService {
  constructor(private http: HttpClient) {}
  baseUrl = "app/examples/";
  getFileContent(path?: string) {
    path = "slider-overview/slider-overview-example.html";
    return this.http.get(this.baseUrl + path, {responseType: 'text'});
  }
}
