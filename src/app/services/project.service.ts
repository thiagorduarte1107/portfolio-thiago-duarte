import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 8,
      title: 'Cadastro Nacional de Pessoas Desaparecidas',
      description: 'Sistema nacional para registro e gestão de informações sobre pessoas desaparecidas, desenvolvido para o Ministério da Justiça e Segurança Pública.',
      period: '2023',
      tags: ['Java 17', 'Spring Boot', 'Docker', 'Swagger'],
      technologies: ['Java 17', 'Spring Boot 2.7.5', 'Maven 3.x', 'Docker', 'Docker Compose', 'Swagger', 'Postman'],
      imageUrl: 'assets/images/missing-persons.jpg',
      client: 'Ministério da Justiça e Segurança Pública'
    },
    {
      id: 1,
      title: 'Evolução do Projeto - Sistema de Gestão para Petshop',
      description: 'Sistema avançado de gestão para pet shop com arquitetura de microserviços, implementando práticas modernas de DevOps e cloud computing.',
      period: '20/05/2022 - 20/05/2023',
      tags: ['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Microservices'],
      technologies: ['Docker', 'Kubernetes', 'AWS (EC2, S3)', 'Jenkins', 'Microservices'],
      imageUrl: 'assets/images/petshop-evolution.jpg',
      client: 'Animal World Pet Shop Riacho Fundo Ltda.'
    },
    {
      id: 2,
      title: 'Sistema de Gestão para Pizzaria',
      description: 'Sistema completo para gerenciamento de pedidos e operações de pizzaria, com interface intuitiva e banco de dados otimizado.',
      period: '14/01/2018 - 14/09/2018',
      tags: ['Java', 'MySQL', 'Web Development'],
      technologies: ['MySQL', 'Java', 'Web Framework'],
      imageUrl: 'assets/images/pizzaria.jpg',
      client: 'Pizzaria Marathon'
    },
    {
      id: 3,
      title: 'Matriz do Projeto - Sistema de Gestão para Petshop',
      description: 'Sistema integrado com emissão de notas fiscais e chatbot para WhatsApp, oferecendo automação de processos e melhor experiência ao cliente.',
      period: '13/04/2021 - 13/04/2022',
      tags: ['NF-e', 'WhatsApp API', 'MySQL'],
      technologies: ['Sistema NF-e', 'WhatsApp Chatbot', 'MySQL'],
      imageUrl: 'assets/images/petshop-matrix.jpg',
      client: 'Animal World Pet Shop Riacho Fundo Ltda.'
    },
    {
      id: 4,
      title: 'Sistema de Gestão de Pedidos e Produção',
      description: 'Aplicação web moderna com relatórios personalizados e integração com WhatsApp para comunicação com clientes.',
      period: '17/05/2019 - 17/05/2020',
      tags: ['Angular', 'Spring Boot', 'TypeScript', 'MySQL'],
      technologies: ['Angular', 'Spring Boot', 'TypeScript', 'MySQL', 'JasperReports', 'WhatsApp API'],
      imageUrl: 'assets/images/orders-management.jpg',
      client: 'Manoel da Costa Rodrigues'
    },
    {
      id: 5,
      title: 'Sistema de Gestão para Petshop (Microservices)',
      description: 'Versão modernizada do sistema de gestão utilizando arquitetura de microserviços e práticas DevOps para maior escalabilidade.',
      period: '20/05/2022 - 20/05/2023',
      tags: ['Docker', 'Kubernetes', 'AWS', 'Jenkins'],
      technologies: ['Docker', 'Kubernetes', 'AWS (EC2, S3)', 'Jenkins', 'Microservices'],
      imageUrl: 'assets/images/petshop-micro.jpg',
      client: 'Animal World Pet Shop Riacho Fundo Ltda.'
    },
    {
      id: 6,
      title: 'Sistema de Gestão para Pizzaria - Versão Base',
      description: 'Sistema fundamental para gerenciamento de pedidos e operações de pizzaria com interface simplificada.',
      period: '14/01/2018 - 14/09/2018',
      tags: ['MySQL', 'Java', 'Web Development'],
      technologies: ['MySQL', 'Java', 'Web Framework'],
      imageUrl: 'assets/images/pizzaria-base.jpg',
      client: 'Pizzaria Marathon'
    },
    {
      id: 7,
      title: 'Sistema Genérico de Gestão',
      description: 'Sistema versátil para gestão de pedidos e produção com relatórios personalizados e integração com WhatsApp.',
      period: '17/05/2019 - 17/05/2020',
      tags: ['Angular', 'Spring Boot', 'TypeScript'],
      technologies: ['Angular', 'Spring Boot', 'TypeScript', 'MySQL', 'JasperReports', 'WhatsApp API'],
      imageUrl: 'assets/images/generic-management.jpg',
      client: 'Manoel da Costa Rodrigues'
    }
  ];

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getFeaturedProjects(): Observable<Project[]> {
    // For now, return all projects as featured
    // You can implement logic to filter featured projects if needed
    return of(this.projects);
  }
}