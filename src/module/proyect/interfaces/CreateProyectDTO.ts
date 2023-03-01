export interface CreateProyectDTO {
  cui: string
  proyectname: string
  unidadejecutora: string
  extension: string
  snip: string
  beneficiarios: string
  fechainicio: Date | null
  fechaculminacion: Date | null
  fechaculminacionactualizado: Date | null
  otros: string
  id_user: number
  status: number
  percent: number
}
