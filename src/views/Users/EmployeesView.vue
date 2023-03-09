<template>
  <div class="fluid-container position-relative main-div">
    <div class="row g-0">
      <SideBar></SideBar>

      <div class="col-xl-10 col-md-9">
        <div>
          <font-awesome-icon
            class="fs-5 mt-5 ms-5 me-3"
            icon="fa-solid fa-magnifying-glass"
          />

          <input
            class="border-bottom ps-3 border-top-0 border-start-0 border-end-0 search-bar"
            type="text"
            placeholder="Search"
          />

          <img
            class="float-end me-5 avatar"
            src="../../assets/images/avatar.jpg"
            alt="avatar"
          />
          <font-awesome-icon
            class="mt-5 fs-4 float-end me-5 user-icon"
            icon="fa-solid fa-circle-info"
          />
          <font-awesome-icon
            class="mt-5 fs-4 float-end me-5 user-icon"
            icon="fa-solid fa-bell"
          />
        </div>

        <div
          class="d-flex flex-wrap align-items-center justify-content-between"
          style="margin-top: 5rem"
        >
          <div class="d-flex flex-wrap align-items-center">
            <font-awesome-icon
              class="position-absolute filter-icon"
              icon="fa-solid fa-magnifying-glass"
            />

            <input
              class="border rounded ms-5 ps-5 search-user-bar"
              type="text"
              placeholder="Search by"
              @keyup="searchUser"
              id="search-user-bar"
            />

            <div class="dropdown" style="margin-left: 1rem">
              <button
                class="btn btn-secondary dropdown-toggle text-black bg-white border"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                id="filter-button"
              >
                Search by --
              </button>
              <ul class="dropdown-menu">
                <li
                  class="dropdown-item"
                  id="filter-element"
                  @click="chooseSearchType($event)"
                >
                  #
                </li>
                <li
                  class="dropdown-item"
                  id="filter-element"
                  @click="chooseSearchType($event)"
                >
                  Name
                </li>
                <li
                  class="dropdown-item"
                  id="filter-element"
                  @click="chooseSearchType($event)"
                >
                  Department
                </li>
                <li
                  class="dropdown-item"
                  id="filter-element"
                  @click="chooseSearchType($event)"
                >
                  Level
                </li>
                <li
                  class="dropdown-item"
                  id="filter-element"
                  @click="chooseSearchType($event)"
                >
                  Join date
                </li>
              </ul>
            </div>
          </div>

          <div class="dropdown me-5 filter-show">
            <button
              class="btn btn-secondary dropdown-toggle text-black bg-white border"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Show --
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li class="dropdown-item" @click="numberOfUsersShowed(4)">
                Show 4
              </li>
              <li class="dropdown-item" @click="numberOfUsersShowed(6)">
                Show 6
              </li>
              <li class="dropdown-item" @click="numberOfUsersShowed(8)">
                Show 8
              </li>
              <li class="dropdown-item" @click="numberOfUsersShowed(10)">
                Show 10
              </li>
            </ul>
          </div>
        </div>

        <table class="table mx-auto mt-4 align-middle list-user-table">
          <thead class="border-white" style="color: #809fb8; height: 50px">
            <tr>
              <th>#</th>
              <th style="cursor: pointer" @click="sortShowedUserList($event)">
                Name<font-awesome-icon
                  class="ms-2 sort-table-icon"
                  icon="fa-solid fa-sort"
                />
              </th>
              <th style="cursor: pointer" @click="sortShowedUserList($event)">
                Department<font-awesome-icon
                  class="ms-2 sort-table-icon"
                  icon="fa-solid fa-sort"
                />
              </th>
              <th style="cursor: pointer" @click="sortShowedUserList($event)">
                Level<font-awesome-icon
                  class="ms-2 sort-table-icon"
                  icon="fa-solid fa-sort"
                />
              </th>
              <th style="cursor: pointer" @click="sortShowedUserList($event)">
                Status<font-awesome-icon
                  class="ms-2 sort-table-icon"
                  icon="fa-solid fa-sort"
                />
              </th>
              <th style="cursor: pointer" @click="sortShowedUserList($event)">
                Join date<font-awesome-icon
                  class="ms-2 sort-table-icon"
                  icon="fa-solid fa-sort"
                />
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="list-user-row"
              v-for="user in showedUserList"
              :key="user.id"
            >
              <td>
                <span
                  :style="{
                    color: user.color,
                    backgroundColor: user.backgroundColor,
                  }"
                  class="badge align-center text-center id-badge"
                >
                  {{ user.id }}
                </span>
              </td>
              <td>{{ user.name }}</td>
              <td>{{ user.department }}</td>
              <td>{{ user.level }}</td>
              <td>
                <span
                  class="badge p-2"
                  :class="statusBadgeClass(user.status)"
                  style="font-size: 1rem"
                >
                  {{ user.status }}
                </span>
              </td>
              <td>{{ user.joinDate }}</td>
              <td>
                <font-awesome-icon
                  icon="fa-solid fa-bars"
                  class="fs-4"
                  style="cursor: pointer"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";

export default {
  data() {
    return {
      userList: [
        {
          id: 3,
          name: "Nguyễn Văn K",
          department: "ES2-2",
          level: "Dev3",
          status: "Ended",
          joinDate: "July 2022",
        },
        {
          id: 123,
          name: "Nguyễn Văn A",
          department: "ES2-1",
          level: "Dev1",
          status: "Confirm",
          joinDate: "July 2022",
        },
        {
          id: 234,
          name: "Nguyễn Văn B",
          department: "ES2-2",
          level: "Dev2",
          status: "Active",
          joinDate: "June 2022",
        },
        {
          id: 345,
          name: "Nguyễn Văn C",
          department: "ES2-2",
          level: "Dev3",
          status: "Active",
          joinDate: "June 2022",
        },
        {
          id: 23,
          name: "Nguyễn Văn D",
          department: "ES2-2",
          level: "Dev3",
          status: "Active",
          joinDate: "March 2022",
        },
        {
          id: 34,
          name: "Nguyễn Văn E",
          department: "ES2-2",
          level: "Dev3",
          status: "Active",
          joinDate: "April 2022",
        },
        {
          id: 24,
          name: "Nguyễn Văn F",
          department: "ES2-2",
          level: "Dev3",
          status: "Confirm",
          joinDate: "May 2022",
        },
        {
          id: 56,
          name: "Nguyễn Văn G",
          department: "ES2-2",
          level: "Dev3",
          status: "Ended",
          joinDate: "March 2022",
        },
      ],
      customUserList: [],
      showedUserList: [],
      // name - department - level - status - join date
      // 0 - not sorted, 1 - inc, -1 - dec
      sortedStatus: [false, false, false, false, false],
      isSearching: false,
    };
  },
  methods: {
    chooseSearchType(event) {
      let searchType = event.currentTarget.innerText;

      let searchButton = document.getElementById("filter-button");
      searchButton.innerText = searchType;
    },
    searchUser() {
      this.customUserList = [];

      let searchUserBarValue = document.getElementById("search-user-bar").value;
      if (searchUserBarValue == "") {
        this.isSearching = false;
      } else {
        this.isSearching = true;
      }
      let searchType = document.getElementById("filter-button").innerText;

      switch (searchType) {
        case "#":
          for (let user of this.userList) {
            if (
              String(user.id)
                .toLowerCase()
                .includes(searchUserBarValue.toLowerCase())
            ) {
              this.customUserList.push(user);
            }
          }
          break;
        case "Name":
          for (let user of this.userList) {
            if (
              user.name.toLowerCase().includes(searchUserBarValue.toLowerCase())
            ) {
              this.customUserList.push(user);
            }
          }
          break;
        case "Department":
          for (let user of this.userList) {
            if (
              user.department
                .toLowerCase()
                .includes(searchUserBarValue.toLowerCase())
            ) {
              this.customUserList.push(user);
            }
          }
          break;
        case "Level":
          for (let user of this.userList) {
            if (
              user.level
                .toLowerCase()
                .includes(searchUserBarValue.toLowerCase())
            ) {
              this.customUserList.push(user);
            }
          }
          break;
        case "Join date":
          for (let user of this.userList) {
            if (
              user.joinDate
                .toLowerCase()
                .includes(searchUserBarValue.toLowerCase())
            ) {
              this.customUserList.push(user);
            }
          }
          break;
        default:
          this.customUserList = Array.from(this.userList);
          break;
      }

      this.showedUserList = Array.from(this.customUserList);
    },
    statusBadgeClass(status) {
      return `status-badge-${status}`;
    },
    numberOfUsersShowed(number) {
      this.showedUserList = Array.from(this.customUserList.slice(0, number));
    },
    sortShowedUserList(event) {
      let sortType = event.currentTarget.innerText;
      let currentShowedUserListLength = this.showedUserList.length;

      function compareName(a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return a.id - b.id;
      }

      function compareDepartment(a, b) {
        if (a.department.toLowerCase() < b.department.toLowerCase()) {
          return -1;
        }
        if (a.department.toLowerCase() > b.department.toLowerCase()) {
          return 1;
        }
        return a.id - b.id;
      }

      function compareLevel(a, b) {
        if (a.level.toLowerCase() < b.level.toLowerCase()) {
          return -1;
        }
        if (a.level.toLowerCase() > b.level.toLowerCase()) {
          return 1;
        }
        return a.id - b.id;
      }

      function compareStatus(a, b) {
        if (a.status.toLowerCase() < b.status.toLowerCase()) {
          return -1;
        }
        if (a.status.toLowerCase() > b.status.toLowerCase()) {
          return 1;
        }
        return a.id - b.id;
      }

      function compareJoinDate(a, b) {
        let aDate = new Date(a.joinDate);
        let bDate = new Date(b.joinDate);

        if (aDate.getTime() == bDate.getTime()) {
          return a.id - b.id;
        } else {
          return aDate.getTime() - bDate.getTime();
        }
      }

      if (this.isSearching == true) {
        this.customUserList = Array.from(this.showedUserList);
      } else {
        this.customUserList = Array.from(this.userList);
      }
      switch (sortType) {
        case "Name":
          this.customUserList.sort(compareName);

          // if name is sorted increasely, it will be reversed
          if (this.sortedStatus[0] == 1) {
            this.customUserList.reverse();

            this.sortedStatus.fill(0);
            this.sortedStatus[0] = -1;
          } else {
            this.sortedStatus.fill(0);
            this.sortedStatus[0] = 1;
          }
          break;
        case "Department":
          this.customUserList.sort(compareDepartment);

          if (this.sortedStatus[1] == 1) {
            this.customUserList.reverse();

            this.sortedStatus.fill(0);
            this.sortedStatus[1] = -1;
          } else {
            this.sortedStatus.fill(0);
            this.sortedStatus[1] = 1;
          }
          break;
        case "Level":
          this.customUserList.sort(compareLevel);

          if (this.sortedStatus[2] == 1) {
            this.customUserList.reverse();

            this.sortedStatus.fill(0);
            this.sortedStatus[2] = -1;
          } else {
            this.sortedStatus.fill(0);
            this.sortedStatus[2] = 1;
          }
          break;
        case "Status":
          this.customUserList.sort(compareStatus);

          if (this.sortedStatus[3] == 1) {
            this.customUserList.reverse();

            this.sortedStatus.fill(0);
            this.sortedStatus[3] = -1;
          } else {
            this.sortedStatus.fill(0);
            this.sortedStatus[3] = 1;
          }
          break;
        case "Join date":
          this.customUserList.sort(compareJoinDate);

          if (this.sortedStatus[4] == 1) {
            this.customUserList.reverse();

            this.sortedStatus.fill(0);
            this.sortedStatus[4] = -1;
          } else {
            this.sortedStatus.fill(0);
            this.sortedStatus[4] = 1;
          }
          break;
        default:
          break;
      }

      this.showedUserList = [];
      for (let i = 0; i < currentShowedUserListLength; i++) {
        this.showedUserList.push(this.customUserList[i]);
      }
    },
  },
  created() {
    // default size is 8
    this.showedUserList = Array.from(this.userList.slice(0, 8));
    this.customUserList = Array.from(this.userList);

    function getRandomColor() {
      const minBrightness = 60;
      const maxBrightness = 240;
      const minColor = 50;
      const r = Math.floor(Math.random() * 206) + minColor;
      const g = Math.floor(Math.random() * 206) + minColor;
      const b = Math.floor(Math.random() * 206) + minColor;
      const brightness = Math.floor((r + g + b) / 3);
      const color = `rgb(${r}, ${g}, ${b}`;
      if (brightness < minBrightness || brightness > maxBrightness) {
        return getRandomColor();
      } else {
        // format: (r, g, b
        return color;
      }
    }

    for (let user of this.userList) {
      let randomColor = getRandomColor();

      user.color = randomColor + ")";
      user.backgroundColor = randomColor + ", 0.1)";
    }
  },
  components: { SideBar },
};
</script>

<style scoped>
.main-div {
  font-family: "Poppins", sans-serif;
}

.search-bar {
  outline: none;
  width: 20rem;
  height: 2.5rem;
  transition: 0.3s;
}

.avatar {
  width: 3rem;
  cursor: pointer;
  margin-top: 2.2rem;
}

.user-icon {
  color: #212121;
  cursor: pointer;
}

.search-user-bar {
  outline: none;
  width: 26rem;
  height: 2.6rem;
  transition: 0.3s;
}

.search-user-bar:hover,
.search-user-bar:focus {
  border: 1px solid black !important;
}

.filter-icon {
  color: #848484;
  margin-left: 3.9rem;
}

.sort-table-icon {
  font-size: 0.7rem;
}

.list-user-table {
  width: 95%;
  border-color: #f1f4f9 !important;
}

.list-user-row {
  height: 80px;
  font-size: 1.15rem;
  font-weight: 500;
}

.id-badge {
  width: 4.5rem;
  height: 3.2rem;
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 2.3rem;
}

@media (min-width: 900px) and (max-width: 1159px) {
  .search-user-bar {
    width: 20rem;
  }
}

@media (min-width: 768px) and (max-width: 899px) {
  .search-bar {
    width: 15rem;
  }

  .search-user-bar {
    width: 15rem;
  }
}

@media only screen and (max-width: 767px) {
  .search-bar {
    width: 30%;
  }

  .search-user-bar {
    width: 12rem;
  }
}

.status-badge-Active {
  color: #12a474;
  background-color: #bbf3e0;
}

.status-badge-Confirm {
  color: #f2994a;
  background-color: #fff3db;
}

.status-badge-Ended {
  color: #eb5757;
  background-color: #ffdbdb;
}
</style>
