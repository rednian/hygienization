import { startCase } from "lodash";


const page = {
    namespaced: true,

    state: {
        is_animation_done: false,
        click_from: null,

        is_click: false,

        is_area: false,

        is_loaded_item: false,

        is_home: true,

        is_mouse_down: false,

        is_start_drag: false,

        is_previous: false,

        position: {
            x: null,
            y: null
        },
        recent_position: [],

        screen_size: { x: null, y: null },

        from: null,

        to: null,

        background: {},

        foreground: {},

        navigate: {
            from: null,
            to: null
        },

        animation: null,

        current_location: null,

        menu_position: { x: null, y: null },



        navigation: {
            right: {
                has_right: false,
                image: null,
            },
            left: {
                has_left: false,
                image: null,
            },
            right_selected: false,
            left_selected: false,
        },

        pages: {
            about: false,
            contact: false,
            process: false,
            gallery: false,
            team: false,
            testimonial: false,
        },

        size:{
            width: 0,
            height: 0
        }

    },

    getters: {
        size: (state) => state.size,

        close_contact: (state) => state.pages.contact,

        is_animation_done: (state) => state.is_animation_done,

        pages: (state) => state.pages,

        getNavigation: (state) => state.navigation,

        getMenuPosition: (state) => state.menu_position,

        animation: (state) => state.animation,

        navigate: (state) => state.navigate,

        click_from: (state) => state.click_from,

        is_click: (state) => state.is_click,

        is_area: (state) => state.is_area,

        background: (state) => state.background,

        foreground: (state) => state.foreground,

        from: (state) => state.from,

        to: (state) => state.to,

        screen_size: (state) => state.screen_size,

        is_loaded_item: (state) => state.is_loaded_item,

        is_home: (state) => state.is_home,

        recent_position: (state) => state.recent_position,

        position: (state) => state.position,

        is_previous: (state) => state.is_previous,

        is_mouse_down: (state) => state.is_mouse_down,

        current_location: (state) => state.current_location,
    },

    mutations: {
        SET_SIZE: (state, payload) => state.size = payload,

        SET_CLOSE_CONTACT: (state, payload) => state.pages.contact = payload,

        SET_IS_ANIMATION_DONE: (state, payload) => state.is_animation_done = payload,

        SET_RIGHT_SELECTED: (state, payload) => state.navigation.right_selected = payload,

        SET_LEFT_SELECTED: (state, payload) => state.navigation.left_selected = payload,

        SET_NAVIGATION_RIGHT: (state, payload) => state.navigation.right = payload,

        SET_NAVIGATION_LEFT: (state, payload) => state.navigation.left = payload,

        SET_MENU_POSITION: (state, payload) => state.menu_position = payload,

        SET_CURRENT_LOCATION: (state, payload) => state.current_location = payload,

        SET_ANIMATION: (state, payload) => state.animation = payload,

        SET_NAVIGATE: (state, payload) => state.navigate = payload,

        SET_CLICK_FROM: (state, payload) => state.click_from = payload,

        SET_IS_AREA: (state, payload) => state.is_area = payload,


        SET_BACKGROUND(state) {
            state.background = {
                'background-image': null,
                'background-position': 'center center',
                'background-repeat': 'no-repeat',
                'background-size': 'cover',
            };
            // state.background = payload,
        },

        SET_IS_CLICK: (state, payload) => state.is_click = payload,

        SET_FOREGROUND: (state, payload) => state.foreground = payload,

        SET_FROM: (state, payload) => state.from = payload,

        SET_TO: (state, payload) => state.to = payload,

        SET_SCREEN_SIZE: (state, payload) => state.screen_size = payload,

        SET_LOADED_ITEM: (state, payload) => state.is_loaded_item = payload,

        SET_CHECK_HOME: (state, payload) => state.is_home = payload,

        SET_RECENT_POSITION(state, payload) {

            let exists_level = state.recent_position.some(v => v.level === payload.level);

            if (exists_level) {
                state.recent_position = state.recent_position.filter(v => v.level !== payload.level);

            }

            state.recent_position.push(payload)

        },

        DELETE_LAST_POSITION(state) {
            if (state.recent_position.length > 0) {
                let last = state.recent_position[state.recent_position.length - 1];
                state.position.x = last.x;
                state.position.y = last.y;

                state.recent_position.pop();
            }
        },

        DELETE_POSITION: (state, payload) => state.recent_position = payload,

        SET_POSITION: (state, payload) => state.position = payload,

        SET_PREVIOUS: (state, is_previous) => state.is_previous = is_previous,

        SET_MOUSE: (state, isDown) => state.is_mouse_down = isDown,


        SET_PAGES: (state, payload) => {

            if (payload == 'about') {
                state.pages.about = true
                state.pages.contact = false
                state.pages.process = false
                state.pages.team = false
                state.pages.gallery = false
                state.pages.testimonial = false
            }

            if (payload == 'contact') {
                state.pages.about = false
                state.pages.contact = true
                state.pages.process = false
                state.pages.team = false
                state.pages.gallery = false
                state.pages.testimonial = false
            }

            if (payload == 'process') {
                state.pages.about = false
                state.pages.contact = false
                state.pages.process = true
                state.pages.team = false
                state.pages.gallery = false
                state.pages.testimonial = false
            }

            if (payload == 'team') {
                state.pages.team = true
                state.pages.about = false
                state.pages.contact = false
                state.pages.process = false
                state.pages.gallery = false
                state.pages.testimonial = false
            }

            if (payload == 'gallery') {
                state.pages.gallery = true
                state.pages.about = false
                state.pages.contact = false
                state.pages.process = false
                state.pages.team = false
                state.pages.testimonial = false
            }

            if (payload == 'testimonial') {
                state.pages.testimonial = true
                state.pages.about = false
                state.pages.contact = false
                state.pages.process = false
                state.pages.team = false
                state.pages.gallery = false
            }

            if (payload == 'home') {
                state.pages.testimonial = false
                state.pages.about = false
                state.pages.contact = false
                state.pages.process = false
                state.pages.team = false
                state.pages.gallery = false
            }
            if (payload == 'team') {
                state.pages.testimonial = false
                state.pages.about = false
                state.pages.contact = false
                state.pages.process = false
                state.pages.team = false
                state.pages.gallery = false
                state.pages.team = true
            }

        },

       
    },

    actions: {
        setSize:({commit}, payload)=>{
            commit('SET_SIZE', payload);
        },
        
        setContactClose: ({commit}, payload)=>{
            commit('SET_CLOSE_CONTACT', payload);
        },
        
        setIsAnimationDone: ({commit}, payload)=>{
            commit('SET_IS_ANIMATION_DONE', payload);
        },

        setPage: ({ commit }, payload) => {
            commit('SET_PAGES', payload);
        },

        setRightSelected: ({ commit }, payload) => {
            commit('SET_RIGHT_SELECTED', payload);
        },

        setLeftSelected: ({ commit }, payload) => {
            commit('SET_LEFT_SELECTED', payload);
        },

        setNavigationRight: ({ commit }, payload) => {
            commit('SET_NAVIGATION_RIGHT', payload);
        },

        setNavigationLeft: ({ commit }, payload) => {
            commit('SET_NAVIGATION_LEFT', payload);
        },

        setMenuPosition: ({ commit }, element) => {

            // console.log(element.target.getBoundingClientRect());
            let el = element.target.getBoundingClientRect();

            let scroll_left = window.pageXOffset || document.documentElement.scrollLeft;
            let scroll_top = window.pageYOffset || document.documentElement.scrollTop;

            let top = scroll_left + el.top;
            let left = scroll_top + el.left;

            commit('SET_MENU_POSITION', { x: left, y: top });

        },

        setCurrrentLocation: ({ commit }, payload) => { commit('SET_CURRENT_LOCATION', payload) },

        setAnimation: ({ commit }, payload) => {
            commit('SET_ANIMATION', payload);
        },

        getNavigate({ commit }, payload) {
            commit('SET_NAVIGATE', payload);
        },

        getNavigation({ commit }, payload) {
            commit('SET_CLICK_FROM', payload);
        },


        getFrom({ commit }, payload) {
            commit('SET_FROM', payload);
        },

        getTo({ commit }, payload) {
            commit('SET_TO', payload);
        },

        getLoadedItem({ commit }, payload) {
            commit('SET_LOADED_ITEM', payload);
        },

        checkHome({ commit }, payload) {
            commit('SET_CHECK_HOME', payload)
        },

        getPosition({ dispatch, commit }, payload) {

            let el = payload.event.target.getBoundingClientRect();

            let scroll_left = window.pageXOffset || document.documentElement.scrollLeft;
            let scroll_top = window.pageYOffset || document.documentElement.scrollTop;

            let top = scroll_left + el.top + el.height + 32;/* 32 is the height from the pin to button */
            let left = scroll_top + el.left + el.width / 2 + 1.5; /* el/width/2 is the middle width of button plus the padding */


            // let top = scroll_left + el.top;/* 32 is the height from the pin to button */
            // let left = scroll_top + el.left; /* el/width/2 is the middle width of button plus the padding */


            commit('SET_POSITION', { x: left, y: top });
            commit('SET_IS_CLICK', true);
            commit('SET_CLICK_FROM', 'main');

            // commit('SET_SCREEN_SIZE', {x: left, y: top});

            dispatch('getRecentPosition', { level: payload.level, x: left, y: top });

        },

        getRecentPosition({ commit }, payload) {
            commit('SET_RECENT_POSITION', payload);
        },

        deleteLastPosition({ commit }) {
            commit('DELETE_LAST_POSITION');
        },

        deletePosition({ commit }) {
            commit('DELETE_POSITION', []);
        },


        previous({ commit }, payload) {
            commit('SET_PREVIOUS', payload);
            commit('SET_CLICK_FROM', 'main');
        },

        mouseAction({ commit }, payload) {
            commit('SET_MOUSE', payload)
        }
    },
}

export default page;