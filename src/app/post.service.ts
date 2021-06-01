import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  
  constructor(private httpClient: HttpClient) { }

  postList(body:any) {

    return this.httpClient.post('http://loadbalancer.danfishel.com/BankService/api/v1/bankregister', body);

  }

}
