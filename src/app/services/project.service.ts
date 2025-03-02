import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'Formação Acadêmica',
      description: 'Graduação em Análise e Desenvolvimento de Sistemas (Universidade Cruzeiro do Sul, 2023) e Pós-Graduações em Desenvolvimento de Aplicações Web, Arquitetura de Software e Inteligência Artificial (Faculdade Facuminas, 2024).',
      period: '2023 - 2024',
      tags: ['Análise de Sistemas', 'Desenvolvimento Web', 'Arquitetura de Software', 'Inteligência Artificial'],
      technologies: ['Análise de Sistemas', 'Desenvolvimento Web', 'Arquitetura de Software', 'Inteligência Artificial'],
      imageUrl: 'assets/images/education.jpg',
      client: 'Formação Acadêmica'
    },
    {
      id: 2,
      title: 'Competências Técnicas',
      description: 'Proficiência em desenvolvimento fullstack com Angular e Spring Boot, práticas DevOps modernas, e arquitetura cloud-native. Experiência com ferramentas de desenvolvimento, CI/CD, e práticas ágeis.',
      period: '2018 - Atual',
      tags: ['Angular','Java' , 'TypeScript', 'CI/CD  Azure Pipelines', 'SCSS' , 'Spring Boot', 'Spring Data JPA', 'Maven', 'Version Control : Git', 'Docker', 'Kubernetes', 'Azure DevOps' , 'SonarQube - Code quality analysis','Application Insights', 'Liquibase'],
      technologies: ['Angular CLI', 'CI/CD  Azure Pipelines', 'Font Awesome', 'SweetAlert2', 'SCSS', 'Java 17', 'Spring Boot', 'Spring Data JPA', 'Lombok', 'Maven', 'Version Control : Git', 'Docker', 'Kubernetes', 'Helm', 'Azure DevOps', 'SonarQube', 'SonarQube - Code quality analysis', 'Application Insights', 'Liquibase'],
      imageUrl: 'assets/images/tech-skills.jpg',
      client: 'Competências Profissionais'
    },
    {
      id: 3,
      title: 'Cadastro Nacional de Pessoas Desaparecidas (CNPD)',
      description: 'Sistema nacional para registro e gestão de informações sobre pessoas desaparecidas, desenvolvido para o Ministério da Justiça e Segurança Pública. Aplicação fullstack segura e escalável com integração a sistemas externos.',
      period: 'Novembro 2024 - Atual',
      tags: ['Java 17', 'Spring Boot', 'Angular', 'TypeScript', 'Spring Security', 'OAuth2', 'Material Design', 'Docker', 'Kubernetes', 'Azure DevOps', 'SonarQube', 'NGINX'],
      technologies: ['Java 17', 'Spring Boot', 'Angular', 'TypeScript', 'Spring Security', 'OAuth2', 'Material Design', 'Docker', 'Kubernetes', 'Azure DevOps', 'SonarQube', 'NGINX'],
      imageUrl: 'assets/images/missing-persons.jpg',
      client: 'Ministério da Justiça e Segurança Pública'
    },
    {
      id: 4,
      title: 'Sistema de Gestão Pet Shop - Microserviços',
      description: 'Sistema avançado de gestão com arquitetura de microserviços para estoque, vendas e relatórios. Implementação de práticas modernas de DevOps e cloud computing.',
      period: 'Maio 2022 - Outubro 2024',
      tags: ['Java 17', 'Spring Boot', 'Angular', 'Node.js', 'AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Microservices'],
      technologies: ['Java 17', 'Spring Boot', 'Angular', 'Node.js', 'AWS (EC2, S3, RDS)', 'Docker', 'Kubernetes', 'Jenkins'],
      imageUrl: 'assets/images/petshop-evolution.jpg',
      client: 'Animal World Pet Shop Riacho Fundo Ltda.'
    },
    {
      id: 5,
      title: 'Sistema de Gestão de Pedidos e Produção',
      description: 'Sistema completo de gestão com módulos de pedidos, produção e relatórios personalizados em PDF. Implementação de validações complexas e integração com sistemas externos.',
      period: 'Maio 2021 - Maio 2022',
      tags: ['Java 17', 'Spring Boot', 'JasperReports', 'Hibernate', 'MySQL'],
      technologies: ['Java 17', 'Spring Boot', 'JasperReports', 'Hibernate', 'MySQL'],
      imageUrl: 'assets/images/orders-management.jpg',
      client: 'Manoel da Costa Rodrigues'
    },
    {
      id: 6,
      title: 'Sistema Integrado Pet Shop - Fase 1',
      description: 'Sistema integrado com cadastro de clientes, registro de pedidos, relatórios, emissão de notas fiscais e chatbot para WhatsApp. Foco em automação de processos.',
      period: '2021 - 2022',
      tags: ['Java', 'Spring Boot', 'MySQL', 'NF-e', 'WhatsApp API'],
      technologies: ['Java', 'Spring Boot', 'MySQL', 'Sistema NF-e', 'WhatsApp Chatbot'],
      imageUrl: 'assets/images/petshop-matrix.jpg',
      client: 'Animal World Pet Shop Riacho Fundo Ltda.'
    },
    {
      id: 7,
      title: 'Sistema de Gestão para Pizzaria',
      description: 'Sistema completo para gerenciamento de pedidos e operações de pizzaria, incluindo cadastro de clientes, registro de pedidos, controle de produção e relatórios gerenciais.',
      period: '2018',
      tags: ['Java', 'MySQL', 'Web Development', 'Relatórios'],
      technologies: ['Java', 'MySQL', 'Web Framework', 'Relatórios'],
      imageUrl: 'assets/images/pizzaria.jpg',
      client: 'Pizzaria Marathon'
    },
    {
      id: 8,
      title: 'Habilidades Interpessoais',
      description: 'Forte capacidade de comunicação, trabalho em equipe, resolução de problemas e adaptabilidade. Experiência em colaboração em projetos ágeis e dinâmicos.',
      period: '2018 - Atual',
      tags: ['Comunicação', 'Trabalho em Equipe', 'Resolução de Problemas', 'Adaptabilidade', 'Metodologias Ágeis'],
      technologies: ['Comunicação Eficaz', 'Trabalho em Equipe', 'Resolução de Problemas', 'Adaptabilidade', 'Metodologias Ágeis'],
      imageUrl: 'assets/images/soft-skills.jpg',
      client: 'Desenvolvimento Profissional'
    },
    {
      id: 9,
      title: 'Sistema Genérico de Gestão',
      description: 'Sistema versátil para gestão de pedidos e produção com relatórios personalizados e integração com WhatsApp.',
      period: '2019 - 2020',
      tags: ['Angular', 'Spring Boot', 'TypeScript', 'MySQL', 'JasperReports', 'WhatsApp API'],
      technologies: ['Angular', 'Spring Boot', 'TypeScript', 'MySQL', 'JasperReports', 'WhatsApp API'],
      imageUrl: 'assets/images/generic-management.jpg',
      client: 'Manoel da Costa Rodrigues'
    }
  ];

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getFeaturedProjects(): Observable<Project[]> {
    return of(this.projects);
  }
}