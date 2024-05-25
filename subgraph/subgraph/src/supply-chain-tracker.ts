import { BatchCreated, BatchUpdated } from "../generated/DrugBatch/DrugBatch";
import { Batch } from "../generated/schema";

// Handler function for the BatchCreated event
export function handleBatchCreated(event: BatchCreated): void {
  let batch = new Batch(event.params.id.toHex()); // Create a new Batch entity with the event ID
  batch.manufacturer = event.params.manufacturer; // Set the manufacturer field from the event
  batch.manufactureDate = event.params.manufactureDate; // Set the manufactureDate field from the event
  batch.expiryDate = event.params.expiryDate; // Set the expiryDate field from the event
  batch.status = "Created"; // Set the initial status to "Created"
  batch.save(); // Save the new Batch entity to the store
}

// Handler function for the BatchUpdated event
export function handleBatchUpdated(event: BatchUpdated): void {
  let batch = Batch.load(event.params.id.toHex()); // Load the existing Batch entity using the event ID
  if (batch) {
    // Check if the Batch entity exists
    batch.status = event.params.status; // Update the status field from the event
    batch.save(); // Save the updated Batch entity to the store
  }
}