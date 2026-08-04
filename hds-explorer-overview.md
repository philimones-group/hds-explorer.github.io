My name is Paulo Roberto Filimone a Software Engineer specialized in data collection and data management softwares from Mozambique, Maputo
Email: paulphilimone@gmail.com
Github: https://github.com/paulphilimone

Ive recently created a public free and open-source demographics surveillance software.
Here is the description of the software, after I send you the description I will ask some questions so that you can help me improve some text about it.

The application is called HDS-Explorer:

HDS-Explorer stands for Health and Demographics Surveillance Data Explorer;
A server and mobile health and demographics surveillance data collection system that facilitates efficient, accurate data collection for program or research implementation in low-resource settings.
It allows users to collect data for demographic surveillance programs or research studies and store that data on the HDS-Explorer Server data repository app.
HDSS stands for Health and Demographics Surveyllance System
DSS stands for Demographics Surveillance System

HDS-Explorer its an open-source software developed by Paulo Filimone, Philimone’s Group, Mozambique.
https://www.hds-explorer.org

HDS-Explorer its a server-client application designed from its core provide to be a free and open-source a data collection and data repository for demographics surveillance.
Its represented by two softwares a Server application, and a Android Mobile Client Application.

The server application is called: "HDS-Explorer Server" and have its source-code repository on GitHub through the link https://github.com/philimones-group/hds-explorer-server and the source code can be accessed/downloaded using the GitHub raw url https://raw.githubusercontent.com/philimones-group/hds-explorer-server/master/
HDS-Explorer Server application provides the data repository for a Health and Demographics Surveillance system and data management tool for data collection for program or research implementation.

The mobile application is called: "HDS-Explorer Mobile" and have its source-code repository on GitHub through the link https://github.com/philimones-group/hds-explorer-tablet and the source code can be accessed/downloaded using the GitHub raw url https://raw.githubusercontent.com/philimones-group/hds-explorer-tablet/master/.
HDS-Explorer Mobile application provides the system data collection empowered by strong validations to provide a data management that facilitates efficient, accurate data collection for program or research implementation in low-resource settings.

The mobile application provides powerful validation tools to ensure data accuracy and completeness, and it includes features like household registration, visit registration, member enumeration, marital relationship registration, migration registration, death registration, pregnancy registration, pregnancy follow-up visit, birth registration, and more.
It also allows users to create and manage ODK (Open Data Kit) forms, pre-populate data from external datasets, group forms together, and create follow-up lists for regions, households and members.

The app currently supports 4 languages:
- English
- Portuguese
- French
- Ahmaric (with support to Ethiopic Calendar date input)


Source-code and Technologies used:
The Server Application was designed using Grails Framework with Groovy language, Bootstrap and also including ReactJS for the dashboard and supports any database with a JDBC-compliant driver, the default being used is MySQL and optional Postgres.
The Mobile Application was designed using Android Framework with Java Language, uses ObjectBox as the database and also for Maps uses MapBox.



HDS-Explorer its a general purpose data collection application based on health and demographic surveillance dataset, the application allows flexible and fast data search that empowers studies data collection with an Advanced ODK Forms Management, Follow-up lists, and preview external datasets in the mobile app.


1. Type of configurations or customization of the system
-- Regional Hierarchies
-- DSS Core Forms Data collection
-- DSS Core Forms Extensions
2. Features
-- Modular Data Access - Study Modules
-- External Datasets
-- ODK Forms Management
-- Follow-up Lists
-- Id Generator Customization
-- On Mobile Attributes Editor
-- Web-Based Data cleaning tool
-- Fast Access To HDSS
-- Mobile Ofﬂine Data Sharing
3. Tools
-- Mobile Database Export Manager
-- Data Validation and Synchronization Manager


The main panel of the Web Application page displays by default the HDS Dashboard that show details of the current status of your DSS.

1. Type of configurations or customization of the system
-- Regional Hierarchies Levels
Region or DSS Area Hierarchy levels represents an hierarchical subdivisions levels of a DSS Area to locate Households.
Countries or DSS Areas can have different levels and ways to subdivide their area, as an example some sites may divide the levels like:
1.Country
2.Province
3.District
4.Village
The last hierarchy level “Village” will be where you can locate Households.
Regions:
The hierarchy levels defined above are the backbone of spatial identification of Households, in order to localize a specific Household we must have Regions entities created on each one of the Hierarchy Levels and we will be using example of hierarchies named above (eg. 1. Country, 2. District, 3. Village).

-- DSS Core Forms Data collection
To be able to perform Household Visits and collect demographics surveillance data this system makes use of 16 Electronic Forms, each of these forms contains questions related to be subject that will be collected.
These Forms are designated Core Forms they represent demographics surveillance events that occur within a Round.
The Core Forms has a fixed set of questions regarding each event, they are not customizable by the users or administrators of the system, only by the developers.
The List of Core Forms:
Region Registration - Creates a new Region record inside the DSS Area on a previous specified Region;
Household Registration - Creates a new Household record inside the DSS area on a specified Region (collects also GPS Coordinates of the Household); It also supports Institutional Households – Register and manage orphanages, elderly homes, prisons, schools, camps, and other special households that dont have a regular Head of Household.
Household Visit Registration - Creates a new Visit event Record for a Household, allowing to capture also the Household current status (occupied, destroyed, vaccant, etc), allows also multiple types of respondents;
Member Enumeration Registration - Creates a new Member record in the specified Household as an Enumeration event;
Marital Relationship Registration - Allows to register and manage of marital relationships between two or more (polygamic) individuals;
External InMigration Registration - Allows the registration of a Member coming from outside the DSS study area;
Internal InMigration Registration - Allows to register the movement of a Member from one Household to another inside the DSS area;
External OutMigration Registration - Allows to register the movement of a Member from inside the study area to outside the study area;
Household Relocation Registration - Allows to register the movement of a entire Household (all members) from inside de study area to another Household using a single Form (internally it performs Members Internal Inmigrations);
Pregnancy Registration - Allows to register a new Pregnancy and controls and follow-up the pregnancy until the outcome;
Birth Registration (Pregnancy Outcome) - Allows to register new Members through Birth Registration (support multiple babies registration);
Pregnancy Follow-up Visit Registration - Alongside Pregnancy Registration and Pregnancy Outcome it completes the Pregnancy Surveillance feature, its used for pregnancy monitoring, covering both antepartum and postpartum periods.
Death Registration - Create a new Death event record for a resident Member of a specified Household;
Change Head of Household - Allows to register the change of a Head of Household for another member of the same Household.
Change Head of Region - Allows to register the change of a Head of the Region for another member of that Region, This feature allows sites to enable the creation of Heads of Regions(Regional Hierarchies)
Eg: for sites that have Compounds in Regional Hierarchies, can enable the system to have support for Compound Heads, On mobile Heads of Regions can be collected on Region Details panel and on Household Visits.
Change Proxy Head of Households - Allows to Assign substitute heads (resident, non-resident, or non-DSS members) to handle real-world scenarios like deaths, migration, or absent heads, minors living in the same household without an adult but can have a guardian from the community as a Proxy Head.
Incomplete Visit Registration - Allows to register which Member and the reason for not being possible to perform data collection about him.


-- DSS Core Forms Extensions
Each HDSS site eventually will want to have they custom Forms asking more questions during the DSS events data collection related to their research program goals.
To be able to improve your DSS event questionaire the system provides a feature called Core Form Extensions.
Core Form Extensions are a customizable ODK Forms that are collected during the DSS event data collection right after the Core Forms data is collected.
After customizing the ODK Core Form sample its necessary to upload it to the Server using the Core Form Extensions management page, this process will create a database table to store the data collected using ODK Collect, so data instances of the Form Extensions are uploaded directly to HDS-Explorer and stored in a database table created by the system.

The process of data collection in the mobile app is:
 1. Collect Household Core Form - Uses an internal electronic Forms render software; Collects the default demographics event questions.
 2. Collect Household Extension Form - Uses ODK Collect to perform data collection of customized DSS event; Opens automatically after collecting the Core Form as long as its enabled and customized.
 3. Data packaged - Both forms a packaged as one XML data type and become ready to be uploaded to HDS-Explorer server.

2. Features
-- Modular Data Access - Study Modules
Grants access on data (Region, Household, Member, Forms) to a speciﬁc group of Users (that belongs a study or research program).
The Study Modules its a feature that provides modular data access to the Users of this system.
This feature refers to the ability to access and interact with data in a flexible and modular manner.
This approach allows users to have access to a specific set of data (Regions, Households, Members, Forms, Datasets, Follow-up Lists, etc) providing studies or research programs access only to their data or the exact data that they need.
On the mobile app, right after opening the app the “Login” screen will be visualized and you have to type the credentials to login If the system only have the default Study Module “DSS Surveillance” it will jump to the main menu screen, If the system has more than one Study Modules it will display a list to select which Module this User want to use.
By selecting one of the modules the User will only have access to data that these modules have access to, A User can have access to multiple modules, but in the mobile app only one must be used each time he logs in.

-- External Datasets
This feature provides the ability to add and visualize studies external datasets (data stored in CSV files) on Mobile App and pre-populate the data that you have on an external dataset into ODK Forms via HDS-Explorer.
 - External Datasets are CSV files with a header in the first row with column names and onwards his respective data;
 - A CSV file is a text file that stores tabular data, with each line representing a data record and values separated by commas “,” (commonly can created using text editor or by exporting data from database table or Excel tables);
 - In the header row we put column names that also can contain variables names with the respective labels
   - eg. Column “kitchenInside” can have a label defined as “Is the kitchen inside the House?”
   - So to represent that in the header row would be: kitchenInside:”Is the kitchen inside the House”;
 - The label will be displayed when you access the mobile app to visualize the data;
 - Datasets must be linked to one of these entities (Region, Household, Member and User);
 - To locate the row in the dataset its necessary also to provide the Key Column that link the Dataset column to a entity key column
The datasets can be visualized in the mobile app when you select a Region, Household or Member associated to with, a special tab shows you the content associated to that entity.

-- ODK Forms Management
Before explaining this feature its important to clarify that HDS-Explorer has its own Form Render that his used to collect the HDSS Core Forms that are based on Excel file and directly rendered in Android app.
And also the system allows the use of ODK Collect to collect other Forms for your research program, and also it uses ODK Collect to collect the Core Form Extensions due to its flexibility of customization and wider usage.
This feature takes the advantage of ODK (Open Data Kit) and empowers research programs to associate demographics surveillance data with ODK Forms.
ODK is a powerful tool that enables organizations to digitize their data collection processes, eliminating the need for paper-based forms and streamlining data entry and analysis.
With ODK Forms management in HDS-Explorer provides a flexibility and versatility to capture data based on demographics surveyllance entities and to pre-populate ODK Forms field variables with HDSS data.
 - ODK Forms in the system are associated to entities/subjects (Regions, Households or Members)
   - Means that forms are allocated to either Regions, Households or Members;
 - These forms are registered using the server system and can be opened for data collection using the mobile app
   - The mobile app uses ODK Collect to perform the data collection and saves the reference in the system;
 - In the mobile app you can have access to panels/screens that shows you the details of a certain entity
   - Region Details - If the form is allocated to the subject Region it will only be visible in this panel
   - Household Details - If the form is allocated to the subject Household it will only be visible in this panel
   - Member Details - If the form is allocated to the subject Member it will only be visible in this panel;
 - These panels have a button “Collect Data” that when clicked allows you to select any ODK form that was registered in the system for the selected entity/subject;
 - The example below shows a “Member Details panel” displaying information about a household member named “BERNARDO MENDES”, and also when “Collect Data” button is clicked it shows a list of ODK Forms to select and we selected “CHAMPS Form 4”, at the last image shows ODK Collect that opened this form automatically right after we select it.
   - All the visible forms on the second image are forms that are allocated to a Member, forms associated with other subjects wont be visible here;
 - Mapping preloaded ODK Variables in the server app
   - This function will allow HDS-Explorer to have a map of ODK Variables that will be preloaded automatically when the ODK Form opens in the mobile app
   - The system allows to preload columns from the database tables of Region, Household, Member, User, Visit, Follow-up List, Form Group and External Datasets
   - For each variable in the ODK Form that you want to be preloaded you must select the equivalent column from the database tables mentioned in the previous point.

-- Follow-up Lists
This feature alongside the ODK Forms Management takes even further the empowerment HDS-Explorer provides to research programs by granting the ability to create lists of Regions, Households, or Members to follow-up and collect ODK Forms.
 - Follow-up List allow to create electronic lists that can be visualized in the mobile app
 - Subjects (Regions, Households, or Members) are specified using their codes and will be visualized in mobile app
 - Its possible specify which ODK Forms will be collected for each subject
 - This feature allows fieldworkers to go to the field with a list of specific individuals that they need to follow-up to complete the a longitudinal data collection
 - Its easy to setup and configure by using Excel based file and can be updated through APIs.

-- Id Generator Customization
Allow easy implementation of a site-level Id schemes generator customization, enables each site to reuse their previous codes on Regions, Households and Members.
Code generator represents the regions, households, members code scheme generators, that are essentially the visible ID’s that will be granted to each region, household and member.
The system its opened to implement a variety of code schemes that can be easily programmed to be supported by system.
Up to the date of creation of this manual the system only supports the code schemes described below:
- Default code generator
- Default simple code generator
- Compound based code generator
New schemes can be customized by implementing a Java Interface provided in app source-code.

-- On Mobile Attributes Editor
Supports editing Region, Households and Members atributtes on Mobile app and synhcronize later the edited datasets with the server.

-- Fast Access To HDSS
Fast access to explore demographics surveillance data powered by ObjectBox a light NoSQL Database in the Mobile App and proper compressed datasets to syncronize server and mobile.

-- Web-Based Data cleaning tool
Using the Server web-app, its possible to visualize the validation errors, perform lookups on previous collected data for better decisions and edit records with correct values, invalidate or delete records.

-- Mobile Ofﬂine Data Sharing
This feature allows to share recently collected data between two or more mobile devices using Bluetooth or WIFI Network.
 - This feature can share:
   - Recently created Regions (Regional hierarchies entities)
   - Recently created Pre-registered Households (Empty Households collected with the intent to finalize collection later)
 - This functionality allows to maximize the offline data collection in a specific region
   - By avoid duplication of data related to new Regions and new Households
   - Two or more fieldworkers can work in the same region and collect multiple new Households without duplicating the Ids
   - One fieldworker can collect a new Region and share with other mobile devices preserving the Id generated
   - One fieldworker can collect multiple pre-registrations of Households and share with other devices so that they work simultaneusly in the same area and collecing different Households without duplicating Ids.
 - Helps avoing duplication of Ids by sharing the data collected by one table to anothers during offline data collection.

3. Tools
-- Mobile Database Export Manager
The Mobile Database Export Manager is a essential tool within HDS-Explorer that facilitates the seamless transfer of data from the server to mobile devices for offline data collection.
The Mobile Database Export Manager efficiently export data in XML/ZIP format, ensuring that field teams have access to the most up-to-date information for their data collection activities.
 - Data Flow of HDS-Explorer:
The database export manager its a part of the data synchronization process that follows the steps below:
   1. Initially you have to setup the server application (configure hierarchy levels, regions, users, etc);
   2. Export database for mobile synchronization (Export XML/ZIP files of the database);
   3. Login to Mobile app and synchronize with the Server (Download data from Server);
   4. Start Data Collection using the Mobile App;
   5. Upload collected data to the Server (upload forms to HDS-Explorer Server);
   6. Execute Data validation and Transfer from Staging databases tables to the Final database tables;
   7. Now we will repeat continuously the synchronization process by having loops from process 2 up to 6.
 - Exporting Database for mobile synchronization
   - The Mobile Database Export Manager allows users to export data in five distinct categories, including Settings, External datasets, Follow-up lists, Households, and Demographics Events.
    1. Export Settings - Includes Parameters, Modules, Forms, Core Forms Extensions, and Users;
    2. Export External Datasets;
    3. Export Follow-up Lists;
    4. Export Households - Includes Rounds, Regions, Households, Members, and Residencies;
    5. Export Demographics Events - Includes (Visits, Head Relationships, Marital Relationships, Pregnancy Registrations, and Deaths.
   - Each category corresponds to specific data elements, enabling users to selectively export relevant datasets based on their project requirements.
     - If you updated or added new Users, Forms or Modules you just need to execute Export Settings.
 - To be able to download the exported data to mobile devices, you must enter credentials and click on Synchronize that will open a synchronization panel and under the tab "Sync Downloads" you will get a page that allows you to download all datasets;
 - To be able to upload the data collected using the mobile device you also must enter credentials and click on Synchronize and under the tab "Sync Uploads" you will be able to visualize the collected data and upload it.

-- Data Validation and Synchronization Manager
The Data Validation and Synchronization Manager its another essential tool within HDS-Explorer that allows to manage and execute the data validation process by providing easy to use error visualization and data cleaning tool, it facilitates the data transfer process betwen staging database tables to final database tables.
 - Staging database tables, are the primary tables that receives raw data from the Mobile devices, and waits there until the synchronization manager selects the data and validates, if the validation is sucessfully executed the data is transferred to the final tables.
 - Final database tables, are the final destination of the data collected using the mobile devices, this data is transferred from the staging table after strong validation procedures are successfully executed, the data in these tables are proper linked to one another.
 - Processes executed in the syncronization manager:
   - The process “HDS Events: Compile and Execute Events” consists on:
     - Organize the data on the staging database tables order them by dependencies and collection date and time
     - Validate each demographics ensuring data integrity
     - If Errors are found they are logged in proper database tables
     - If no Errors found the data is transferred from staging database tables to final database tables
   - Data cleaning reports and editor
     - If the process “HDS Events: Compile and Execute Events” produces validation errors its possible to visualize them on the web page, the system allows to see the message errors and enables you to edit the record values that trigger the error to be able to fix them and re-execute the synchroniztion process.
