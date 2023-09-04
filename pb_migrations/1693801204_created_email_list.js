/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "edmho5u0e6xq8nf",
    "created": "2023-09-04 04:20:04.267Z",
    "updated": "2023-09-04 04:20:04.267Z",
    "name": "email_list",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("edmho5u0e6xq8nf");

  return dao.deleteCollection(collection);
})
