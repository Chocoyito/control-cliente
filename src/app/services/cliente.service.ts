import { Injectable } from "@angular/core";
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/compat/firestore'
import { Cliente } from "../models/cliente.model";
import { Observable, map } from 'rxjs'

@Injectable()
export class ClienteService{
    clientesColeccion: AngularFirestoreCollection<Cliente>
    clienteDoc: AngularFirestoreDocument<Cliente>

    clientes: Observable<Cliente[]>
    cliente: Observable<Cliente>

    constructor(private db: AngularFirestore){
        this.clientesColeccion = db.collection('cliente', ref => ref.orderBy('nombre', 'asc'))
    }

    getClientes(): Observable<Cliente[]>{
        // Obtener coleccion clientes
        this.clientes = this.clientesColeccion.snapshotChanges().pipe(
            map(cambios => {
                return cambios.map(accion => {
                    const datos = accion.payload.doc.data() as Cliente
                    datos.id = accion.payload.doc.id
                    return datos
                })
            })
        )
        return this.clientes
    }

    agregarCliente(cliente: Cliente): void{
        this.clientesColeccion.add(cliente)
    }

    getCliente(id: string): Observable<Cliente>{
        this.clienteDoc = this.db.doc<Cliente>(`cliente/${id}`)
        this.cliente = this.clienteDoc.snapshotChanges().pipe(
            map( accion =>{
                if (accion.payload.exists){
                    const datos = accion.payload.data() as Cliente
                    datos.id = accion.payload.id
                    return datos
                }
                else{
                    return null
                }
            })
        )
        return this.cliente
    }

    editarCliente(cliente: Cliente){
        this.clienteDoc = this.db.doc(`cliente/${cliente.id}`)
        this.clienteDoc.update(cliente)
    }

    eliminarCliente(cliente: Cliente){
        this.clienteDoc = this.db.doc(`cliente/${cliente.id}`)
        this.clienteDoc.delete()
    }
}