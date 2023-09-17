import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Configuracion } from "../models/configuracion.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class ConfiguracionService{

    configuracionDoc: AngularFirestoreDocument<Configuracion>
    configuracion: Observable<Configuracion>
    id: string = '1' 

    constructor(private db: AngularFirestore){}

    getConfiguracion(): Observable<Configuracion>{
        this.configuracionDoc = this.db.doc(`configuracion/${this.id}`)
        this.configuracion = this.configuracionDoc.valueChanges()
        return this.configuracion
    }

    modificarConfiguracion(configuracion: Configuracion){
        this.configuracionDoc = this.db.doc(`configuracion/${this.id}`)
        this.configuracionDoc.update(configuracion)
    }
}