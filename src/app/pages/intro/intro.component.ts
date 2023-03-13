import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'intro',
  templateUrl: './intro.component.html'
})
export class IntroComponent {

  STONES = [
    {
      title: 'Alimentación',
      img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgOTYgOTYwIDk2MCIgd2lkdGg9IjQ4Ij48cGF0aCBkPSJtMTY1IDkzNi00Mi00MiA0MjAtNDIwcS0yMi00OC0xMC05OS41dDU3LTk2LjVxNDUtNDQgMTA5LTU2LjVUODA0IDI1MHE0MiA0MiAyOC41IDEwNVQ3NzIgNDY2cS00MSA0Mi05MS41IDU1dC05NC41LTZsLTY3IDY3IDMxMiAzMTItNDIgNDItMzEyLTMxMi0zMTIgMzEyWm0xMjUtMzUxTDE3MSA0NjZxLTUxLTUxLTUzLTEyMXQ0Ni0xMjRsMjQ1IDI0NS0xMTkgMTE5WiIvPjwvc3ZnPg==',
      url: 'food'
    },
    {
      title: 'Tareas',
      img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgOTYgOTYwIDk2MCIgd2lkdGg9IjQ4Ij48cGF0aCBkPSJtNDM0IDgwMSAyMjktMjI5LTM5LTM5LTE5MCAxOTAtMTAzLTEwMy0zOSAzOSAxNDIgMTQyWk0yMjAgOTc2cS0yNCAwLTQyLTE4dC0xOC00MlYyMzZxMC0yNCAxOC00MnQ0Mi0xOGgzNjFsMjE5IDIxOXY1MjFxMCAyNC0xOCA0MnQtNDIgMThIMjIwWm0zMzEtNTU0VjIzNkgyMjB2NjgwaDUyMFY0MjJINTUxWk0yMjAgMjM2djE4Ni0xODYgNjgwLTY4MFoiLz48L3N2Zz4=',
      url: 'tasks'
    },
    {
      title: 'Deporte',
      img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgOTYgOTYwIDk2MCIgd2lkdGg9IjQ4Ij48cGF0aCBkPSJtNTUwIDk3Mi00Mi00MiAxNDItMTQyLTM4Mi0zODItMTQyIDE0Mi00Mi00MiA1Ni01OC01Ni01NiA4NS04NS00Mi00MiA0Mi00MiA0MyA0MSA4NC04NCA1NiA1NiA1OC01NiA0MiA0Mi0xNDIgMTQyIDM4MiAzODIgMTQyLTE0MiA0MiA0Mi01NiA1OCA1NiA1Ni04NiA4NiA0MiA0Mi00MiA0Mi00Mi00Mi04NCA4NC01Ni01Ni01OCA1NloiLz48L3N2Zz4K',
      url: 'sports'
    },
    {
      title: 'Reminders',
      img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgOTYgOTYwIDk2MCIgd2lkdGg9IjQ4Ij48cGF0aCBkPSJNNTk2LjgxNyA4MzZRNTU2IDgzNiA1MjggODA3LjgxN3EtMjgtMjguMTgzLTI4LTY5VDUyOC4xODMgNjcwcTI4LjE4My0yOCA2OS0yOFQ2NjYgNjcwLjE4M3EyOCAyOC4xODMgMjggNjlUNjY1LjgxNyA4MDhxLTI4LjE4MyAyOC02OSAyOFpNMTgwIDk3NnEtMjQgMC00Mi0xOHQtMTgtNDJWMjk2cTAtMjQgMTgtNDJ0NDItMThoNjV2LTYwaDY1djYwaDM0MHYtNjBoNjV2NjBoNjVxMjQgMCA0MiAxOHQxOCA0MnY2MjBxMCAyNC0xOCA0MnQtNDIgMThIMTgwWm0wLTYwaDYwMFY0ODZIMTgwdjQzMFptMC00OTBoNjAwVjI5NkgxODB2MTMwWm0wIDBWMjk2djEzMFoiLz48L3N2Zz4=',
      url: 'remainder'
    }
  ]

  constructor(
    private router: Router,
  ) {

  }
  
  redirect(path: string){
    this.router.navigate([path])
  }
}
