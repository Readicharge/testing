import axios from "axios";



const createService = async (formData) => {

    try {
        console.log(formData)
        const response = await axios.post(`http://localhost:5000/api/service`, formData);
        alert(response)
        console.log(response)
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};


const getserviceList = async () => {
    try {
        const response = await axios.get(`http://localhost:5000/api/service`);
        return response;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const getServiceNameById = async (serviceId) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/service/${serviceId}`);
        return response.data.name;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const getServiceCodeById = async (serviceId) =>{
    try {
        const response = await axios.get(`http://localhost:5000/api/service/${serviceId}`);
        return response.data.service_code;
    } catch (error) {
        console.log(error);
        return null;
    }
}


const deleteServiceTimeById = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:5000/api/time/${id}`);

    } catch (error) {
        console.log(error);
        return null;
    }
}


const createAdmin = async (formData) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/admin/`, formData);
        console.log(response)
    }
    catch (error) {
        console.log(error);

    }
}

const getAdminData = async () => {
    try {
        const response = await axios.get(`http://localhost:5000/api/admin/`);
        return response;
    } catch (error) {
        console.log(error);
    }
}


const deleteAdmin = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:5000/api/admin/${id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}




const updateAdmin = async (id, dataObject) => {
    try {
        const response = await axios.put(`http://localhost:5000/api/admin/${id}`, dataObject);
        console.log(response)
        return response;
    } catch (error) {
        console.log(error);
    }
}


const getTechnicianData = async () => {
    try {
        const response = await axios.get(`http://localhost:5000/api/technician/`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const createTechnician = async (formData) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/technician/`, formData);
        console.log(response)
    }
    catch (error) {
        console.log(error);

    }
}


const updateTechnician = async (id, dataObject) => {
    try {
        const response = await axios.put(`http://localhost:5000/api/technician/${id}`, dataObject);
        console.log(response)
        return response;
    } catch (error) {
        console.log(error);
    }
}


const getJob = async () => {
    try {
        const response = await axios.get(`http://localhost:5000/api/job/`);
        return response;
    } catch (error) {
        console.log(error);
    }
}



export {updateAdmin,
    deleteAdmin,
    createAdmin,
    getAdminData,
    createService,
    getserviceList,
    getServiceNameById,
    getServiceCodeById,
    deleteServiceTimeById,
    getTechnicianData,
    updateTechnician,
    createTechnician,
    getJob
}