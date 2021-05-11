import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { Revenue } from './Revenue'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild("grafico", { static: true }) elemento: ElementRef;
  revenue: Revenue = new Revenue()
  my_rev: Revenue[] = []
  my_table: [] = []
  x = new Array()

  ngOnInit(){
    new Chart(this.elemento.nativeElement, {
      type: 'line',
      data: {
        labels: ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],
        datasets: [
          {
            data: [10,20,30,25,20,34,13,3,27,30,21,15],
            borderColor: 'red',
            fill: false
          },
          {
            data: [40,45,25,10,46,50,31,20,60,25,65,37],
            borderColor: "green",
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        }
      }
    });

    this.inicio()
  }

  inicio() {

    this.my_table = JSON.parse(localStorage.getItem("info_rec"))
    if (this.my_table.length > 0) {
      this.my_rev = JSON.parse(localStorage.getItem("info_rec"))
      this.my_rev.forEach(elemento => this.x.push(elemento)
      )
     
    }
  }

  saveForm(form) {

    if (!this.revenue.id) {
      this.revenue.id = (new Date()).getTime()
      this.my_rev.push(this.revenue)

    } else {
      var test = this.my_rev.find(a => a.id === this.revenue.id)
      test.tipo = this.revenue.tipo
      test.descricao = this.revenue.descricao
      test.valor = this.revenue.valor
    }
    this.x.push(
      this.revenue
    )

    this.my_rev.push
    localStorage.setItem('info_rec', JSON.stringify(this.x))

    this.revenue = new Revenue()
    form.resetForm()
  }
  remover(x: Revenue) {
    let exclui = this.my_rev.findIndex(a => a.id === x.id)
    this.my_rev.splice(exclui, 1)
  }

}
