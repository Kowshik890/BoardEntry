import { ApiService } from './services/admissionService/api.service';
import { BoardEntryComponent } from './components/board-entry/board-entry.component';
import { AdmitReportComponent } from './components/admit-report/admit-report.component';
import { AdmitCardComponent } from './components/admit-card/admit-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { ActorsComponent } from './components/actors/actors.component';
import { SignUpByAdminComponent } from './components/sign-up-by-admin/sign-up-by-admin.component';
import { ReactiveFormsModule} from '@angular/forms';
import { SignupadminComponent } from './components/signupadmin/signupadmin.component';
import { BsDatepickerModule} from 'ngx-bootstrap';
//import { DashboardheaderComponent } from './components/dashboardheader/dashboardheader.component';
//import { MenusidebarComponent } from './components/menusidebar/menusidebar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SiteheaderComponent } from './components/siteheader/siteheader.component';
import { OtpverificationComponent } from './components/otpverification/otpverification.component';
import { OtpvalidationComponent } from './components/otpvalidation/otpvalidation.component';
import { AdmissionformComponent } from './components/admissionform/admissionform.component';
import { StartpageComponent } from './components/startpage/startpage.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormnavigateComponent } from './components/formnavigate/formnavigate.component';
import { GroupEntryComponent } from './components/group-entry/group-entry.component';
import { GroupListComponent } from './components/group-list/group-list.component';
import { BoardReportComponent } from './components/board-report/board-report.component';
import { SubjectComponent } from './components/subject/subject.component';
import { BasePath } from './BasePath';
import { TimeTableComponent } from './components/time-table/time-table.component';
import { TimeTableService } from './services/timetableService/time-table.service';
import { TimeTableReportComponent } from './components/time-table-report/time-table-report.component';
import { CommonService} from './common.service';
import { UserServiceComponent } from './user-service/user-service.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SemesterEntryComponent } from './components/semester-entry/semester-entry.component';
import { SemesterListComponent } from './components/semester-list/semester-list.component';
import { SemesterApiServiceService } from './services/semesterService/semester-api-service.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    SignupComponent,
    StudentDashboardComponent,
    ActorsComponent,
    SignUpByAdminComponent,
    SignupadminComponent,
    // DashboardComponent,
    HomepageComponent,
    SiteheaderComponent,
    OtpverificationComponent,
    OtpvalidationComponent,
    AdmissionformComponent,
    StartpageComponent,
    FooterComponent,
    FormnavigateComponent,
    GroupEntryComponent,
    GroupListComponent,
    AdmitCardComponent,
    AdmitReportComponent,
    BoardEntryComponent,
    BoardReportComponent,
    SubjectComponent,
    TimeTableComponent,
    TimeTableReportComponent,
    UserServiceComponent,
    SidebarComponent,
    SemesterEntryComponent,
    SemesterListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot([{
      path: 'otpverification',
      component: OtpverificationComponent
    },
      {
        path: 'otpvalidation',
        component: OtpvalidationComponent
      },
      {
        path: 'admission',
        component: AdmissionformComponent
      },
      {
        path: 'footer',
        component: FooterComponent
      },
      {
        path: 'formnavigate',
        component: FormnavigateComponent
      },
      {
        path: '',
        component: StartpageComponent
      },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'SignUp',
      component: SignupComponent
    },
    {
      path: 'test',
      component: TestComponent
    },
    {
      path: 'StudentDashBoard',
      component: StudentDashboardComponent
    },
    {
      path: 'signupadmin',
      component: SignupadminComponent
    },
    {
      path: 'timetable',
      component: TimeTableComponent
    },
      {
        path: 'timetablereport',
        component: TimeTableReportComponent
      },
    {
      path: 'home',
      component: HomepageComponent
    },
    // {
    //   path: 'dash',
    //   component: DashboardheaderComponent
    // },
    // {
    //   path: 'msbar',
    //   component: MenusidebarComponent
    // },
      {
        path: 'group-entry',
        component: GroupEntryComponent
      },
      {
        path: 'admitcard',
        component: AdmitCardComponent
      },
      {
        path: 'admitreport',
        component: AdmitReportComponent
      },
      {
        path: 'boardentry',
        component: BoardEntryComponent
      },
      {
        path: 'boardreport',
        component: BoardReportComponent
      },
      {
        path: 'group-list',
        component: GroupListComponent
      },
      {
        path: 'subject',
        component: SubjectComponent
      },
      {
        path: 'semester-list',
        component: SemesterListComponent
      },
      {
        path: 'semester-entry',
        component: SemesterEntryComponent
      },
    ]),
  ],
  providers: [TimeTableService, ApiService, BasePath, CommonService, UserServiceComponent, SemesterApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
