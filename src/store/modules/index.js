// import axios  from '../../plugins/axios'
import axios from 'axios'

const index = {
    namespaced: true,

    state: () =>({
        locations: JSON.parse(localStorage.getItem('api_response')) || [],
        
        inner_location: {
            left_nav: null,
            right_nav: null,
            tooltips: []
        },

        location_nav: null,
        loading: false,
        settings: null,
        tooltips: [],

        home: null,

        side_nav: null,

        get_location: null,

    }),

    getters: {
        get_location: (state) => state.get_location,

        all: (state) => state.locations,

        side_nav: (state) => state.side_nav,

        //find slug of current page and return the right nav
        right_nav: (state) => (slug) => {
            let parent_location = state.locations.filter(v => v.slug === slug)[0];
            parent_location.right_nav.x = 0;
            parent_location.right_nav.y = 0;
            return parent_location.right_nav;
        },

        parent_location: (state) => (parent_id) => state.locations.filter(v => v.goto_id == parent_id),

        get_location_nav: (state) => state.location_nav,

        location: (state) => (slug) => state.locations.filter(v => v.slug === slug)[0],

        inner_location: (state) => state.inner_location,

        locations: (state) => (name) => state.locations.filter(v => v.name.toLowerCase() === name.toLowerCase()),

        loading: (state) => state.loading,

        settings: (state) => state.settings,

        tooltips: (state) => state.tooltips,

        home: (state) => state.home,


    },

    mutations: {

        SET_SETTING: (state, payload) => {
            state.settings = state.locations.find(v => v.slug === payload);
        },

        SET_LOADING: (state, payload) => state.loading,

        SET_LOCATION_NAV: (state, payload) => {

            let slug = payload.slug.replace(/-/g, ' ');
    
            let search =  state.locations.filter(v =>{
                
            let name = v.name.toLowerCase();
            
            let payload_name = payload.name.toLowerCase();

            //    return (v.slug.includes(payload.slug) || payload.slug.includes(v.slug)) && payload.parent_id == v.parent_id;
               return (name.includes( payload_name ) || payload_name.includes(name) ) && payload.parent_id == v.parent_id;
            })[0];

          return  state.location_nav = search;
        },

        SET_LOCATION: (state, payload) => {
            return state.locations1 = state.locations.filter(v => v.slug === payload)[0]
        },

        SET_HOME: (state, payload) => {
            state.home = {
                action: 'navigate',
                image_map_photo: payload.image_map_photo,
                name: 'home',
                id: payload.id,
                parent_id: 0,
                slug: 'home',
                tooltips: payload.tooltips.data,
                app_id: null,
                goto_id: 0,
                x: 0,
                y: 0
            };

        },

        SET_SIDE_NAV: (state, payload) => {
            state.side_nav = state.locations.filter(v=>payload.parent_id == v.parent_id);
        },

         setSideNav({commit}, payload){
            commit('SET_SIDE_NAV', payload);
        },

        SET_INNER_LOCATION: (state, slug)=>{
            console.log(slug);
            state.inner_location = state.locations.find(v=> v.slug == slug);
        },

        GET_LOCATION: (state, slug) =>{
            
            let locations = JSON.parse(localStorage.getItem('api_response')) || [];

            state.get_location = locations.find(v=> v.slug === slug);

        },

    },

    actions: {
        setLocation({commit}, slug){
            commit('GET_LOCATION', slug);
        },

        setInnerLocation: ({commit}, payload)=>{
            commit('SET_INNER_LOCATION', payload);
        },

        setSideNav({commit}, payload){
            commit('SET_SIDE_NAV', payload);
        },

        setSetting: ({ commit, state }, payload) => {
            // if(state.locations !== undefined || state.locations.length > 0){
                commit('SET_SETTING', payload);
            // }
        },

        setLoading: ({ commit }, payload) => {
            commit('SET_LOADING', payload);
        },

        setLocationNav: ({ commit }, payload) => {
            commit('SET_LOCATION_NAV', payload)
        },

  
        getLocation({ commit }, payload) {
            commit('SET_LOCATION', payload);
        },

        async map({ commit }) {
            
            commit('SET_LOADING', true);

            await axios.get('https://admin.hygienization.com/api/image-map/show/91629d93-8b1d-4a1d-845b-f4caf487d253', {
                headers: {
                    'Authorization': `Bearer ${process.env.VUE_APP_TOKEN}`,
                    "Content-Type": "application/json",
                }
            })
            .then(res => res.data)
            .then(res => {  
    
                let data = res.data.tooltips.data;
                let parent = res.data;
                let temp = [];

                data = data.reduce(flat, [], 0, 100);
                let images = [];

                temp.push({
                    action: 'navigate',
                    image_map_photo: parent.image_map_photo,
                    name: 'home',
                    id: parent.id,
                    parent_id: 0,
                    slug: 'home',
                    tooltips: parent.tooltips.data,
                    app_id: null,
                    goto_id: 0,
                    x: 0,
                    y: 0
                });

                data.forEach(v=>{ temp.push(v); });

                // temp.forEach(v=>{
                //     let image = new Image();
                //     image.src = v.image_map_photo;
                //     images.push(image);

                // });

             
                if( localStorage.getItem('api_response') === null){
                    localStorage.setItem('api_response', JSON.stringify(temp));
                }
    
            })
            .catch(e => { console.log(e.message); })
            .finally(()=>{ commit('SET_LOADING', false); });

        }
    }
}


//flatten the array to firsr level
function flat(r, a) {
    var b = {};
    Object.keys(a).forEach(function (k) {
        if (k !== 'tooltips') {
            b[k] = a[k];
        }
    });
    r.push(b);
    if (Array.isArray(a.tooltips.data)) {
        b.tooltips = a.tooltips.data.map(function (a) { return a; });
        return a.tooltips.data.reduce(flat, r);
    }
    return r;
}

export default index