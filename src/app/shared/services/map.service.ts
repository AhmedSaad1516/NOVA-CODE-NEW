import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MapService {

  private locationsUrl = 'https://gulf.carpulla.com/public/api/v1/front/locations';
  private areasUrl = 'https://gulf.carpulla.com/public/api/v1/front/areas';
  private apiPassword = '@#$gulf@#$GENIO';
  private apiUrl = 'https://gulf.carpulla.com/public/api/v1/front/locations';

  lang: any;
  private createHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Apipassword': this.apiPassword
    });

    if ('lang' in localStorage) {
      this.lang = localStorage.getItem('lang');
      headers = headers.append('lang', this.lang as string);
    }

    return headers;
  }
  constructor(private http: HttpClient) { }

  getLocations(areaId: number): Observable<any> {
    const headers = this.createHeaders();
    const url = `${this.locationsUrl}?area_id=${areaId}`;
    return this.http.get<any>(url, { headers });
  }

  getAllLocations(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getLocationsAll(): Observable<any> {
    const headers = this.createHeaders();
    const url = `${this.locationsUrl}`;
    return this.http.get<any>(url, { headers });
  }
  getAreas(): Observable<any> {
    const headers = this.createHeaders();
    return this.http.get<any>(this.areasUrl, { headers });
  }
  getCategories(): Observable<any> {
  const headers = this.createHeaders();
  const categoriesUrl = 'https://gulf.carpulla.com/public/api/v1/front/categories';
  return this.http.get<any>(categoriesUrl, { headers });
}


getAllLocationsMain():Observable<any>
{
  const headers = this.createHeaders();
 return this.http.get('https://gulf.carpulla.com/public/api/v1/front/locations', { headers })
}
}




