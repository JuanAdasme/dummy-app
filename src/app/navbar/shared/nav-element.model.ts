export interface NavElement {
  id: number;
  title: string;
  href?: string;
  items?: NavElement[];
}
