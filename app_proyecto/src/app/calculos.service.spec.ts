import { TestBed } from '@angular/core/testing';

import { CalculosService } from './calculos.service';

describe('CalculosService', () => {
  let service: CalculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Funciona el validador de Rut',()=>{
    const rut1 = '1234-5';
    
    let esValido = service.validarRut(rut1);
    expect(esValido).toBeTrue();

    const rut2 = '1234'; 
    esValido = service.validarRut(rut2);
    expect(esValido).toBeFalse();
  });

  it('Validar suma',()=>{

    let prueba = service.suma(2,2);
    expect(prueba).toBe(4);
  });

});
