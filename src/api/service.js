import axios from "axios";
/* require("dotenv").config(); */

class Service {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true // => you might need this when having the users in the app
      // XMLHttpRequest from a different domain cannot set cookie values for their own domain unless withCredentials is set to true before making the request.
      // withCredentials indicates whether or not cross-site Access-Control requests should be made using credentials
    });
  }

  getFlatmate = async(id) => {
    try {      
      const res = await this.service.get(`/profile/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  isFavoriteUser = async(id) => {
    try {      
      const res = await this.service.get(`/user/isFavorite/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  suggestedUsers = async() => {
    try {      
      const res = await this.service.get(`/users/suggested/`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  myFavoritesUsers = async() => {
    try {      
      const res = await this.service.get("/users/favorites");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  setFavoriteUser = async(id) => {
    try {      
      const res = await this.service.post(`/idealFlatmate/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  editUser = async(id, user) => {
    try {      
      const res = await this.service.post(`/improveMyProfile/${id}`,user);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  getFlat = async(id) => {
    try {      
      const res = await this.service.get(`/flat/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  isFavoriteFlat = async(id) => {
    try {      
      const res = await this.service.get(`/flat/isFavorite/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  myFavoritesFlats = async() => {
    try {      
      const res = await this.service.get("/flats/favorites");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  myFlats = async() => {
    try {      
      const res = await this.service.get("/myListings");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }


  setFavoriteFlat = async(id) => {
    try {      
      const res = await this.service.post(`/flat/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  handleUpload = async (theFile) => {
    try {
      const res = await this.service.post("/upload", theFile);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  saveNewFlat = async (newFlat, id) => {    
    try {
      const res = await this.service.post("/addMyFlat", newFlat, id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  getFlats = async (filter) => {
      try {
          const res = await this.service.get("/flats", { params: { filter } })          
          return res.data
      } catch (error) {
        console.log(error);
      }
  }

  getUsers = async (filter) => {
    try {
        const res = await this.service.get("/users", { params: { filter } })          
        return res.data
    } catch (error) {
      console.log(error);
    }
}

  updateFlat = async(id, flat) => {
    try {
      const res = await this.service.post(`/myListings/edit/${id}`,flat);
      return res.data;
    }
    catch(error){
      console.log(error);
    }
  }
}

const axiosRequestFunctions = new Service();

export default axiosRequestFunctions;