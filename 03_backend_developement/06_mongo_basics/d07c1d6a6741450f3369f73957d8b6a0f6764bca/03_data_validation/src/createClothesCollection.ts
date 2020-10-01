import * as mongo from "mongodb";

export const sweaterProperties = {
  // write your sweater properties here
  required: ["_id", "name", "color", "category", "size"],
  additionalProperties: false,
  properties: {
    _id: { bsonType: "objectId" },
    name: {
      bsonType: "string",
      maxLength: 30,
      description: "must be a string and is required with max 30 characters",
    },
    color: {
      bsonType: "string",
      maxLength: 15,
      description: "must be a string and is required with max 15 characters",
    },
    category: {
      bsonType: "string",
      enum: ["sweater"],
    },
    size: {
      bsonType: "string",
      enum: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    },
  },
};

export const shoesProperties = {
  // write your shoes properties here
  required: ["_id", "name", "color", "category", "size"],
  additionalProperties: false,
  properties: {
    _id: { bsonType: "objectId" },
    name: {
      bsonType: "string",
      maxLength: 30,
      description: "must be a string and is required with max 30 characters",
    },
    color: {
      bsonType: "string",
      maxLength: 15,
      description: "must be a string and is required with max 15 characters",
    },
    category: {
      bsonType: "string",
      enum: ["shoes"],
    },
    size: {
      bsonType: "int",
      minimum: 30,
      maximum: 50,
    },
    material: {
      bsonType: "string",
      enum: ["leather", "textile", "synthetic"],
    }
  },
};

export const pantsProperties = {
  // write your pants properties here
  required: ["_id", "name", "color", "category", "size"],
  additionalProperties: false,
  properties: {
    _id: { bsonType: "objectId" },
    name: {
      bsonType: "string",
      maxLength: 30,
      description: "must be a string and is required with max 30 characters",
    },
    color: {
      bsonType: "string",
      maxLength: 15,
      description: "must be a string and is required with max 15 characters",
    },
    category: {
      bsonType: "string",
      enum: ["pants"],
    },
    size: {
      bsonType: "object",
      additionalProperties: false,
      required: ["width"],
      properties: {
        width: {
          bsonType: "int",
          minimum: 32,
          maximum: 46,
          description: "must be integer between 32 and 46",
        },
        cut: {
          bsonType: "string",
          enum: ["slim", "skinny", "regular", "straight"],
          description: "must be string",
        },
      }
    }
  }
};

export const clothesValidator = {
  // write your validator here
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "name", "color", "category", "size"],
      oneOf: [{ sweaterProperties }, { shoesProperties }, { pantsProperties }],
    },
  },
};

export function createClothesCollection(
  db: mongo.Db
): Promise<mongo.Collection> {
  return db.createCollection("clothes", clothesValidator);
}
