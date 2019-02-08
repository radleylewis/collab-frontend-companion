import { TestBed } from '@angular/core/testing';
import { environment } from '../environments/environment';
import { VoterService } from './voter.service';

describe('VoterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VoterService = TestBed.get(VoterService);
    expect(service).toBeTruthy();
  });
});

export class GetWalletsService {
  
  baseURL:string = environment.apiURL;

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
