export const  addYears = (date: Date, years: number) =>{
  date.setFullYear(date.getFullYear() + years);
  return date;
}


export const htmlToElement = (html: string) =>{
  const template = document.createElement('template')
  html = html.trim()
  template.innerHTML = html
  return template.content.firstChild
}


 export const validateDate = (date: any)=> {
  return date instanceof Date && !isNaN(date as any);
}
