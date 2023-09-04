/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("edmho5u0e6xq8nf")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "al8ldcly",
    "name": "email",
    "type": "email",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("edmho5u0e6xq8nf")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "al8ldcly",
    "name": "field",
    "type": "email",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  return dao.saveCollection(collection)
})
