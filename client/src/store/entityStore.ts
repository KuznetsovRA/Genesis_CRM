import { defineStore } from "pinia";
import { createEntity } from "../../api/api.ts";
import type { TEntityType, TStoreEntity } from "../../type.ts";

export const useEntityStore = defineStore("entity", {
  state: () => ({
    createdEntities: {
      leads: [],
      contacts: [],
      companies: [],
    } as TStoreEntity,
  }),
  actions: {
    async createEntityAction(entityType: TEntityType, name: string) {
      try {
        const response = await createEntity(entityType, name);
        if (entityType) {
          const newEntity = {
            id: response.id,
            name: name,
          };

          this.createdEntities[entityType].push(newEntity);
          sessionStorage.setItem(
            "createdEntities",
            JSON.stringify(this.createdEntities),
          );
        }
      } catch (error) {
        console.error("Ошибка при создании сущности:", error);
        throw error;
      }
    },
    getLeads() {
      return this.createdEntities.leads;
    },
    getContacts() {
      return this.createdEntities.contacts;
    },
    getCompanies() {
      return this.createdEntities.companies;
    },
    loadEntitiesFromSessionStorage() {
      const storedEntities = sessionStorage.getItem("createdEntities");
      if (storedEntities) {
        this.createdEntities = JSON.parse(storedEntities);
      }
    },
  },
});
