export interface ImportFormat {
  displayName: string;
  code: string;
  extension: string;
}

export const IMPORT_FORMATS: ImportFormat[] = [
  { displayName: 'CSV', extension: 'csv', code: 'csv' },
  { displayName: 'XLIFF 1.2', extension: 'xliff', code: 'xliff12' },
  { displayName: 'JSON Flat', extension: 'json', code: 'jsonflat' },
  { displayName: 'JSON', extension: 'json', code: 'jsonnested' },
  { displayName: 'YAML Flat', extension: 'yaml', code: 'yamlflat' },
  { displayName: 'YAML', extension: 'yaml', code: 'yamlnested' },
  { displayName: 'Java Properties', extension: 'properties', code: 'properties' },
  { displayName: 'Gettext (po)', extension: 'po', code: 'po' },
];

export interface ImportResult {
  terms: {
    added: number;
    skipped: number;
  };
  translations: {
    upserted: number;
  };
}
