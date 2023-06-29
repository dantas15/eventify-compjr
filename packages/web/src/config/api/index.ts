import { api as apiService } from '@/config/api/apiService';
import type { CreatedEvent, Event } from "@eventify/schemas";

type EventPayload = { data: Event };
/* Maybe change it later */
type ImagePayload = { data: FormData};


export const api = {
  events: {
    getAllEvents: () => {
      return apiService.get<CreatedEvent[]>('/events');
    },
    getSpecificEventById: (eventId: string) => {
      return apiService.get<CreatedEvent>(`/events/${eventId}`);
    },
    createEvent: (payload: EventPayload) => {
      return apiService.post<CreatedEvent>('/events', payload);
    },
    updateEventFeaturedImage: (eventId: string, payload: ImagePayload) => {
      return apiService.put<CreatedEvent>(`/events/image/${eventId}`, payload , {
          'headers': {
            'Content-Type': 'multipart/form-data',
          }
        },
      );
    },
    updateEvent: (eventId: string, payload: EventPayload) => {
      return apiService.put(`/events/${eventId}`, payload);
    },
    deleteEvent: (eventId: string) => {
      return apiService.delete(`/events/${eventId}`);
    },
  },
  users: {
    getCurrentUserData: () => {
      return apiService.get('/me');
    }
  },
  files: {
    deleteImage: (filename: string) => {
      return apiService.delete(`/files/image/${filename}`);
    },
  },
  images: {
    getImageByFilename: (filename: string) => {
      return apiService.get(`/files/image/${filename}`);
    },
  },
  /* Auth with Google resources
  * https://developers.google.com/identity/sign-in/web/backend-auth?hl=pt-br
  * https://yobaji.github.io/vue3-google-login/
  * */
  auth: {
    googleAuth: () => {
      return apiService.get('/auth/google');
    },
    googleAuthCallback: () => {
      return apiService.get('/auth/google/callback');
    },
  },
} as const;