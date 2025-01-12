export interface Internship {
    id: string
    title: string
    company: string
    location: string
    duration: string
    stipend: string
    description: string
    type: string
    created_at: string
  }
  
  export interface Hackathon {
    id: string
    title: string
    description: string
    date: string
    location: string
    image_url: string
    tags: string[]
    created_at: string
  }
  
  export interface Scholarship {
    id: string
    title: string
    amount: string
    description: string
    icon: string
    created_at: string
  }
  
  export interface Contact {
    id: string
    name: string
    email: string
    message: string
    created_at: string
  }