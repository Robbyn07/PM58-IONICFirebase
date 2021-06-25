import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ContactosService } from '../../../services/contactos.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

  constructor(private router:Router, private contactosService: ContactosService) { }
  contactos: any;

  ngOnInit() {
    this.contactos = this.contactosService.getContactos();
  }

  editar(contacto: any){
    let params: NavigationExtras = {
      queryParams: {
        contacto: contacto
      }
    }

    this.router.navigate(['contactos/crear'], params)
  }

  navCrear(){
    this.router.navigate(['contactos/crear'])
  }
  
}
