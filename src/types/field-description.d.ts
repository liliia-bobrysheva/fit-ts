export interface FieldDescription {
    developer_data_index: number;
    field_definition_number: number;
    fit_base_type_id: number;
    field_name: string;
    units: string;
    scale?: number | null;
    offset? : number | null;
    native_field_num?: number;
  }