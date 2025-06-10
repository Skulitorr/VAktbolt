import { Staff, Shift, SickCall, Suggestion } from '../types';

/**
 * Helper function to handle fetch errors
 */
const handleFetchError = (error: any, fallbackMessage: string): never => {
  console.error('API Error:', error);
  throw new Error(fallbackMessage || 'An error occurred');
};

/**
 * Generic fetch helper with error handling
 */
const fetchData = async <T>(url: string, options?: RequestInit): Promise<T> => {
  try {
    const response = await fetch(url, options);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    return await response.json() as T;
  } catch (error) {
    return handleFetchError(error, `Failed to fetch data from ${url}`);
  }
};

/**
 * Fetch staff data
 */
export const fetchStaff = async (): Promise<Staff[]> => {
  try {
    const data = await fetchData<{ staff: Staff[] }>('/api/staff.json');
    return data.staff;
  } catch (error) {
    console.error('Error in fetchStaff:', error);
    return [];
  }
};

/**
 * Fetch shifts data
 */
export const fetchShifts = async (): Promise<Shift[]> => {
  try {
    const data = await fetchData<{ shifts: Shift[] }>('/api/shifts.json');
    return data.shifts;
  } catch (error) {
    console.error('Error in fetchShifts:', error);
    return [];
  }
};

/**
 * Fetch sick calls data
 */
export const fetchSickCalls = async (): Promise<SickCall[]> => {
  try {
    const data = await fetchData<{ sickcalls: SickCall[] }>('/api/sickcalls.json');
    return data.sickcalls;
  } catch (error) {
    console.error('Error in fetchSickCalls:', error);
    return [];
  }
};

/**
 * Fetch suggestions data
 */
export const fetchSuggestions = async (): Promise<Suggestion[]> => {
  try {
    const data = await fetchData<{ suggestions: Suggestion[] }>('/api/suggestions.json');
    return data.suggestions;
  } catch (error) {
    console.error('Error in fetchSuggestions:', error);
    return [];
  }
};

/**
 * Submit a sick call
 */
export const submitSickCall = async (
  sickCall: Omit<SickCall, 'id' | 'submitted' | 'status'>
): Promise<SickCall> => {
  // In a real app, this would be a POST request to an API
  console.log('Submitting sick call:', sickCall);
  
  // Simulate API response
  return {
    ...sickCall,
    id: Math.floor(Math.random() * 1000) + 10, // Generate a random ID
    submitted: new Date().toISOString(),
    status: 'Pending'
  };
};

/**
 * Manage a suggestion (accept or reject)
 */
export const manageSuggestion = async (
  suggestionId: number, 
  action: 'accept' | 'reject'
): Promise<void> => {
  // In a real app, this would be a PUT or POST request to an API
  console.log(`${action === 'accept' ? 'Accepting' : 'Rejecting'} suggestion ID: ${suggestionId}`);
  
  // Simulate API call delay
  return new Promise(resolve => setTimeout(resolve, 500));
};
