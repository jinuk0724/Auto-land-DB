import { contextBridge, ipcRenderer } from 'electron';
import type { SearchRequest, SearchResponse } from './realEstateApi.js';

contextBridge.exposeInMainWorld('desktopApi', {
  searchRealEstate: (request: SearchRequest): Promise<SearchResponse> => ipcRenderer.invoke('real-estate:search', request),
  openExternal: (url: string): Promise<boolean> => ipcRenderer.invoke('app:openExternal', url),
});

export type DesktopApi = {
  searchRealEstate: (request: SearchRequest) => Promise<SearchResponse>;
  openExternal: (url: string) => Promise<boolean>;
};
