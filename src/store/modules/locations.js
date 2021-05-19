import axios from 'axios';

const locations = {
    namespaced: true,

    state: () =>({
        all: JSON.parse(localStorage.getItem('api_response')) || [],
        side_navigation: null,
        position: {
            x: 0,
            y: 0
        },
        
        related_locations: [],

        current_index: 0,

        location: {
            prev: null,
            current: null,
            next: null
        },

    }),

    getters:{
        related_locations: (state) => state.related_locations,

        location: (state) =>state.location,

        position: (state) => state.position,

        parent_location: (state) => (parent_id) => state.all.find(v => v.goto_id == parent_id),

        side_navigation: (state) => state.side_navigation,
        
        inner_location: (state) => (slug) => state.all.find(v=>v.slug === slug),

        home: (state) => state.all.find(v=>v.slug == 'home' && v.name === 'home'),

        all: (state) => state.all,
    },

    mutations:{

        SET_POSITION: (state, payload) => state.position = payload,

        SET_SIDE_NAVIGATION: (state, payload) => state.side_navigation =  state.all.filter(v=>payload.parent_id == v.parent_id),

        SET_CURRENT: (state, payload) =>{
            let locations = state.all.filter(v=>payload.parent_id == v.parent_id);

            state.location.current = locations.find(v=>v.slug === payload.slug);
            
            state.current_index = locations.findIndex(v=>v.slug == payload.slug);
            
        },

        SET_RIGHT: (state, payload) =>{
            let locations = state.all.filter(v=>payload.parent_id == v.parent_id);

            locations.forEach((v, i)=>{
                if(state.current_index+1 == i){
                    state.location.next = v;
                }
            });
        },

        SET_LEFT: (state, payload) =>{
            let locations = state.all.filter(v=>payload.parent_id == v.parent_id);
            
            locations.forEach((v, i)=>{
                if(state.current_index-1 == i){
                    state.location.prev = v;
                }
            });
        },

        SET_ALL: (state, locations) => state.all = locations,

        SET_RELATED_LOCATION:(state, payload) =>state.related_locations = state.all.filter(v=>v.parent_id == payload.goto_id),
    },

    actions:{
        setRelatedLocation: ({commit}, payload) =>{
            commit('SET_RELATED_LOCATION', payload);
        },

        setLocation: ({commit}, payload)=>{
          
            commit('SET_CURRENT', payload);
            commit('SET_RIGHT', payload);
            commit('SET_LEFT', payload);
        },

        calculatedPosition: ({commit}, payload)=>{
            if(payload.image !== null){
                
                let image = new Image();
            
                image.src = payload.image_map_photo;

                let x = (payload.x * window.innerWidth)/image.width + image.offsetWidth;

                let y = (payload.y * window.innerHeight)/image.height + image.offsetWidth;

                commit('SET_POSITION', {left: `${x}%`, top: `${y}`});
            }
        },

        setSideNavigation: ({commit}, payload)=>{
            commit('SET_SIDE_NAVIGATION', payload);
        },

        async map({ commit }) {
            

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
                let locations = [];

                data = data.reduce(flat, [], 0, 100);
                let images = [];

                locations.push({
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

                data.forEach(v=>{ locations.push(v); });

                commit('SET_ALL', locations);
        
                let d = new Date();
                let expiration_date = d.setHours(d.getMinutes() + 30);
                localStorage.setItem('expiration_date', expiration_date);
            
                if( localStorage.getItem('api_response') === null){
                    localStorage.setItem('api_response', JSON.stringify(locations));
                }
    
            })
            .catch(e => { console.log(e.message); })
            // .finally(()=>{ commit('SET_LOADING', false); });

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


export default locations;