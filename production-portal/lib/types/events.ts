import { DomainEvent } from "@/lib/constants/events";

export interface DomainEventPayload<
  TData = Record<string, unknown>,
> {
  id: string;

  event: DomainEvent;

  timestamp: Date;

  actorId?: string;

  entityId?: string;

  correlationId?: string;

  data: TData;
}