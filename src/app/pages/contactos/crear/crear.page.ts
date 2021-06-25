import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from '../../../domain/contacto';
import { ContactosService } from '../../../services/contactos.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  contacto: Contacto = new Contacto;

  constructor(private route: ActivatedRoute, private router: Router,
    private contactosService: ContactosService) { 
      
    route.queryParams.subscribe(params =>{
      console.log(params)
      this.contacto = params.contacto;
      if(this.router.getCurrentNavigation().extras.queryParams){
        this.contacto = this.router.getCurrentNavigation().extras.queryParams.contacto
      }
    })
  }

  ngOnInit() {
    
  }

  guardar(){
    console.log(this.contacto);
    this.contactosService.save(this.contacto)
  }

  guardarTotal(){
    console.log(this.contacto);
    this.contactosService.save(this.contacto)
    this.router.navigate(['contactos/listado'])
  }

  crear(){
    this.router.navigate(['contactos/listado'])
  }
}
