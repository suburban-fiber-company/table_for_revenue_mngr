export interface API_RESPONSE {
    status: boolean
    data: Data
}

export interface Data {
    total_customers_count: number
    total_new_customers_two_months: number
    total_no_of_business_internet_customers: number
    total_no_of_business_wifi_customers: number
    total_customers_paying_for_service: number
    total_customers_paying_for_service_details: TotalCustomersPayingForServiceDetail[]
    total_customers_not_paying_for_service: number
    total_customers_not_paying_for_service_details: TotalCustomersNotPayingForServiceDetail[]
    total_customers_in_graph: TotalCustomersInGraph
    new_customers_in_graph: NewCustomersInGraph[]
    payment_category_breakdown: PaymentCategoryBreakdown
}

export interface TotalCustomersPayingForServiceDetail {
    id: number
    user_id: number
    srun_id: any
    odoo_id: string
    sure_id: any
    status: number
    phone_number: string
    mobile_number: string
    home_address: string
    siteID: any
    tabId: any
    tagId: any
    created_at: string
    updated_at: string
    plan: string
    subscription: string
    how_did_you_hear: string
    receive_promotional_message: any
    address_type: any
    name_of_plaza: any
    state: any
    city: any
    estate: any
    street_name: any
    street_no: any
    rc_no: any
    location: any
    is_coverage: any
    business_name: string
    email: string
    lga: any
    area: any
    referral_code: any
    office_shop_number: any
    contact_person_firstname: any
    contact_person_lastname: any
    type: string
    sensor_objid: string
    is_migrated: string
    is_migrated_to_quickbooks: number
    quickbook_id: number
    sector_id: any
    is_lead_migrated: number
    quickbook_retry: number
    quickbook_batch_id: any
    channel: string
    unique_identifier: any
    contract_agreement: number
    vatable: number
}

export interface TotalCustomersNotPayingForServiceDetail {
    id: number
    user_id: number
    srun_id: any
    odoo_id: string
    sure_id: any
    status: number
    phone_number: any
    mobile_number: any
    home_address: string
    siteID: any
    tabId: any
    tagId: any
    created_at: string
    updated_at: string
    plan: string
    subscription: string
    how_did_you_hear: string
    receive_promotional_message: any
    address_type: any
    name_of_plaza: any
    state: any
    city: any
    estate: any
    street_name: any
    street_no: any
    rc_no: any
    location: any
    is_coverage: any
    business_name: string
    email: string
    lga: any
    area: any
    referral_code: any
    office_shop_number: any
    contact_person_firstname: any
    contact_person_lastname: any
    type: string
    sensor_objid: string
    is_migrated: string
    is_migrated_to_quickbooks: number
    quickbook_id: number
    sector_id: any
    is_lead_migrated: number
    quickbook_retry: number
    quickbook_batch_id: any
    channel: string
    unique_identifier: any
    contract_agreement: number
    vatable: number
}

export interface TotalCustomersInGraph {
    active_customers: number
    inactive_customers: number
}

export interface NewCustomersInGraph {
    month: string
    total: number
}

export interface PaymentCategoryBreakdown {
    gateway_payment: number
    manual_payment: number
}
