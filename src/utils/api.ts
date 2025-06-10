import { Staff, Shift, SickCall, Suggestion } from '../types';
import {
  fetchStaff as fetchStaffHelper,
  fetchShifts as fetchShiftsHelper,
  fetchSickCalls as fetchSickCallsHelper,
  fetchSuggestions as fetchSuggestionsHelper,
  submitSickCall as submitSickCallHelper,
  manageSuggestion as manageSuggestionHelper
} from './apiHelpers';

export const fetchStaff = async (): Promise<Staff[]> => {
  return fetchStaffHelper();
};

export const fetchShifts = async (): Promise<Shift[]> => {
  return fetchShiftsHelper();
};

export const fetchSickCalls = async (): Promise<SickCall[]> => {
  return fetchSickCallsHelper();
};

export const fetchSuggestions = async (): Promise<Suggestion[]> => {
  return fetchSuggestionsHelper();
};

export const submitSickCall = async (sickCall: Omit<SickCall, 'id' | 'submitted' | 'status'>): Promise<SickCall> => {
  return submitSickCallHelper(sickCall);
};

export const manageSuggestion = async (
  suggestionId: number, 
  action: 'accept' | 'reject'
): Promise<void> => {
  return manageSuggestionHelper(suggestionId, action);
};