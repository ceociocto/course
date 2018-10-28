import Login from '@/views/login'
import Classroom from '@/views/classroom'
import CourseList from '@/views/course'
import Course from '@/views/course/course'
import Main from '@/views/main'
import VueRouter from 'vue-router';
const routes = [
  { path: '/login', name: 'Login', component: Login},
  { path: '/', name: 'Main', component: Main,
    children: [
      { path: '/classroom', name: 'Classroom', component: Classroom},
      { path: '/course-list', name: 'CourseList', component: CourseList},
      { path: '/course/:id', name: 'Course', component: Course},
      ]
  }
]

export default new VueRouter({
  routes,
  mode: 'history'
})