
export async function getAllDomains() {
    try {
        const response = await axios.get('/');
        return {
            error: false,
            data: response.data,
            message: "Successfully fetched all domains."
        }
    } catch (error) {
        return {
            error: true,
            data: null,
            message: "Error fetching domains."
        }
    }
};

export async function createDomain(domain) {
    try {
        const response = await axios.post('/', { domain: domain });
        return {
            error: false,
            data: response.data,
            message: "Successfully created domain with name " + domain.domain + "."
        }
    } catch (error) {
        return {
            error: true,
            data: null,
            message: "Error creating domain."
        }
    }
};

export async function deleteDomain(domain) {
    const domainId = domain.id
    const domainName = domain.id
    try {
        const response = await axios.delete(`/${domainId}`);
        return {
            error: false,
            data: response.data,
            message: "Successfully deleted domain name: " + domainName + "."
        }
    } catch (error) {
        return {
            error: true,
            data: null,
            message: "Error deleting domain name: " + domainName + "."
        }
    }
};

export async function getAllRecordsByDomainId(domain) {
    const domainId = domain.id
    const domainName = domain.id
    try {
        const response = await axios.get(`/${domainId}/records`);
        return {
            error: false,
            data: response.data,
            message: "Successfully fetched all records for domain" + domainName + "."
        }
    } catch (error) {
        return {
            error: true,
            data: null,
            message: "Error fetching records for domain name: " + domainName + "."
        }
    }
};


export async function createRecord(domainId, record) {
    const recordType = record.type
    try {
        const response = await axios.post(`/${domainId}/records`, record);
        return {
            error: false,
            data: response.data,
            message: "Successfully created " + recordType + " record."
        }
    } catch (error) {
        return {
            error: true,
            data: null,
            message: "Error creating " + recordType + " record."
        }
    }
};

export async function updateRecord(domainId, record) {
    const recordId = record.id
    const recordType = record.type
    try {
        const response = await axios.put(`/${domainId}/records/${recordId}`, record);
        return {
            error: false,
            data: response.data,
            message: "Successfully updated " + recordType + " record."
        }
    } catch (error) {
        return {
            error: true,
            data: null,
            message: "Error updating " + recordType + " record."
        }
    }
};

export async function deleteRecord(domainId, record) {
    const recordId = record.id
    const recordType = record.type
    try {
        const response = await axios.delete(`/${domainId}/records/${recordId}`);
        return {
            error: false,
            data: response.data,
            message: "Successfully deleted " + recordType + " record."
        }
    } catch (error) {
        return {
            error: true,
            data: null,
            message: "Error deleting " + recordType + " record."
        }
    }
};