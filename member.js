function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 30,
        address: '123 Main St'
    };

    var skills = {
        languages: ['JavaScript', 'Python', 'Ruby'],
        isDesigner: true
    };

    // Add the skills object as a property of the member object
    member.skills = skills;

    // Add a method called getSkills that returns the skills object
    member.getSkills = function () {
        return this.skills;
    };

    return member;
}