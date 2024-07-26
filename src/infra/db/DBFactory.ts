import { SQLClient } from '@/infra/db/client'
import { AppDataSource } from '@/infra/db/postgres/setup'

export class DBFactory {
  // Can be used to create different DB connections depending on an env var.
  static createSQLDB(): SQLClient {
    let db: SQLClient

    console.log('Creating persisted DB connection')
    db = new SQLClient(AppDataSource)

    return db
  }
}
