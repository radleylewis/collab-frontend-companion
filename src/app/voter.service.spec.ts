import { TestBed } from '@angular/core/testing';

import { VoterService } from './voter.service';

describe('VoterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VoterService = TestBed.get(VoterService);
    expect(service).toBeTruthy();
  });
});

export class GetWalletsService {
  
  baseURL:string = 'http://192.168.1.145:3030';

  constructor(private http: HttpClient) {
  }

  getWallets(jwt:any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + jwt
    });
    return this.http.get(this.baseURL + '/wallet', { headers: headers });
  }
}
