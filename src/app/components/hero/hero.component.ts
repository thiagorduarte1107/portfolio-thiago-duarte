import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [
    trigger('terminalEffect', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out')
      ])
    ])
  ]
})
export class HeroComponent implements OnInit {
  title = 'Thiago Duarte';
  subtitle = 'Desenvolvedor Java FullStack & Arquiteto de Soluções em Cloud';
  description = 'Apaixonado por tecnologia e inovação, transformo desafios complexos em soluções eficientes e escaláveis. Com mais de 5 anos de experiência no desenvolvimento de software, atuo em projetos estratégicos para o governo e grandes empresas.';
  
  featuredProjects = [
    {
      title: 'Cadastro Nacional de Pessoas Desaparecidas (CNPD)',
      description: 'Desenvolvimento de APIs seguras com Java 17 e Spring Boot, integração com sistemas críticos como BNBO e autenticação via Spring Security.',
      tags: ['Java 17', 'Spring Boot', 'Angular', 'Spring Security'],
      githubUrl: '#'
    },
    {
      title: 'Animal World Pet Shop',
      description: 'Arquitetura de microsserviços em AWS, automação de gestão de estoque e vendas, com orquestração via Kubernetes.',
      tags: ['AWS', 'Microsserviços', 'Kubernetes', 'DevOps'],
      githubUrl: '#'
    }
  ];
  
  cliText = '';
  
  skills = [
    { name: 'Java', level: 90 },
    { name: 'Spring Boot', level: 85 },
    { name: 'Angular', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'PostgreSQL', level: 70 },
    { name: 'Docker', level: 65 }
  ];

  ngOnInit() {
    this.simulateTyping('> Iniciando sistema...');
  }

  private simulateTyping(text: string) {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        this.cliText += text.charAt(index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
  }
}