import { Application } from '../declarations';
import users from './users/users.service';
import tags from './tags/tags.service';
import ticks from './ticks/ticks.service';
import activityTags from './activity-tags/activity-tags.service';
import suggestActivities from './suggest-activities/suggest-activities.service';
import exportData from './export-data/export-data.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(users);
  app.configure(tags);
  app.configure(ticks);
  app.configure(activityTags);
  app.configure(suggestActivities);
  app.configure(exportData);
}
