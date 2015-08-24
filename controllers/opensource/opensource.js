import projects from '../../dat/opensource-projects.json'
import megamark from 'megamark'

projects.forEach(project => {
  project.description = megamark(project.description)
})

export default function (req, res, next) {
  req.model = {
    projects: projects
  }
  next()
}
