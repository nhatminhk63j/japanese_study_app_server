import MigrationUtil from '../../utils/migrationUtil';
import { In, MigrationInterface, QueryRunner, Table } from 'typeorm';

export class InitSchema1604108524971 implements MigrationInterface {
  public static readonly userTable = new Table({
    name: 'users',
    columns: [
      MigrationUtil.getIDColumn(),
      MigrationUtil.getVarcharColumn({ name: 'first_name' }),
      MigrationUtil.getVarcharColumn({ name: 'last_name' }),
      MigrationUtil.getVarcharColumn({ name: 'email', isUnique: true }),
      MigrationUtil.getVarcharColumn({ name: 'avatar_url' }),
      MigrationUtil.getBooleanColumn({ name: 'is_active' }),
      MigrationUtil.getEnumColumn({
        name: 'role',
        enumList: ['admin', 'editor', 'user'],
        enumName: 'roleEnum',
        defaultValue: 'user',
      }),
      ...MigrationUtil.getCreatedAndUpdatedColumn(),
    ],
  });

  public static readonly categoryTable = new Table({
    name: 'categories',
    columns: [
      MigrationUtil.getIDColumn(),
      MigrationUtil.getVarcharColumn({ name: 'name', length: '50' }),
      ...MigrationUtil.getCreatedAndUpdatedColumn(),
    ],
  });

  public static readonly topicTable = new Table({
    name: 'topics',
    columns: [
      MigrationUtil.getIDColumn(),
      MigrationUtil.getVarcharColumn({ name: 'title' }),
      MigrationUtil.getVarcharColumn({ name: 'description' }),
      MigrationUtil.getEnumColumn({
        name: 'level',
        enumList: ['n1', 'n2', 'n3', 'n4', 'n5'],
        enumName: 'levelEnum',
        defaultValue: 'n5',
      }),
      {
        name: 'category_id',
        type: 'int',
      },
      ...MigrationUtil.getCreatedAndUpdatedColumn(),
    ],
    foreignKeys: [
      {
        name: 'FK_Topics_Categories',
        columnNames: ['category_id'],
        referencedTableName: 'categories',
        referencedColumnNames: ['id'],
      },
    ],
  });

  public static readonly lessonTable = new Table({
    name: 'lessons',
    columns: [
      MigrationUtil.getIDColumn(),
      MigrationUtil.getVarcharColumn({ name: 'title' }),
      MigrationUtil.getVarcharColumn({ name: 'description' }),
      {
        name: 'topic_id',
        type: 'int',
      },
      ...MigrationUtil.getCreatedAndUpdatedColumn(),
    ],
    foreignKeys: [
      {
        name: 'FK_Lessons_Topics',
        columnNames: ['topic_id'],
        referencedTableName: 'topics',
        referencedColumnNames: ['id'],
      },
    ],
  });

  public static readonly vocabularyTable = new Table({
    name: 'vocabularies',
    columns: [
      MigrationUtil.getIDColumn(),
      MigrationUtil.getVarcharColumn({ name: 'kanji' }),
      MigrationUtil.getVarcharColumn({ name: 'hiragana' }),
      MigrationUtil.getVarcharColumn({ name: 'vietnamese' }),
      MigrationUtil.getVarcharColumn({ name: 'audio' }),
      {
        name: 'lesson_id',
        type: 'int',
      },
      ...MigrationUtil.getCreatedAndUpdatedColumn(),
    ],
    foreignKeys: [
      {
        name: 'FK_Vocabularies_Lessons',
        columnNames: ['lesson_id'],
        referencedTableName: 'lessons',
        referencedColumnNames: ['id'],
      },
    ],
  });

  public static readonly grammarTable = new Table({
    name: 'grammars',
    columns: [
      MigrationUtil.getIDColumn(),
      MigrationUtil.getVarcharColumn({ name: 'form' }),
      MigrationUtil.getVarcharColumn({ name: 'use' }),
      MigrationUtil.getVarcharColumn({ name: 'explanation' }),
      {
        name: 'order',
        type: 'int',
      },
      {
        name: 'lesson_id',
        type: 'int',
      },
      ...MigrationUtil.getCreatedAndUpdatedColumn(),
    ],
    foreignKeys: [
      {
        name: 'FK_Grammars_Lessons',
        columnNames: ['lesson_id'],
        referencedTableName: 'lessons',
        referencedColumnNames: ['id'],
      },
    ],
  });

  public static readonly listeningTable = new Table({
    name: 'listenings',
    columns: [
      MigrationUtil.getIDColumn(),
      MigrationUtil.getVarcharColumn({ name: 'picture' }),
      MigrationUtil.getVarcharColumn({ name: 'audio' }),
      {
        name: 'lesson_id',
        type: 'int',
      },
      ...MigrationUtil.getCreatedAndUpdatedColumn(),
    ],
    foreignKeys: [
      {
        name: 'FK_Listenings_Lessons',
        columnNames: ['lesson_id'],
        referencedTableName: 'lessons',
        referencedColumnNames: ['id'],
      },
    ],
  });

  public static readonly conventionTable = new Table({
    name: 'conventions',
    columns: [
      MigrationUtil.getIDColumn(),
      MigrationUtil.getVarcharColumn({ name: 'people' }),
      MigrationUtil.getVarcharColumn({ name: 'content' }),
      {
        name: 'order',
        type: 'int',
      },
      {
        name: 'listening_id',
        type: 'int',
      },
      ...MigrationUtil.getCreatedAndUpdatedColumn(),
    ],
    foreignKeys: [
      {
        name: 'FK_Conventions_Listenings',
        columnNames: ['listening_id'],
        referencedTableName: 'listenings',
        referencedColumnNames: ['id'],
      },
    ],
  });

  public static readonly readingTable = new Table({
    name: 'readings',
    columns: [
      MigrationUtil.getIDColumn(),
      MigrationUtil.getVarcharColumn({ name: 'content' }),
      MigrationUtil.getVarcharColumn({ name: 'meaning' }),
      {
        name: 'lesson_id',
        type: 'int',
      },
      ...MigrationUtil.getCreatedAndUpdatedColumn(),
    ],
    foreignKeys: [
      {
        name: 'FK_Readings_Lessons',
        columnNames: ['lesson_id'],
        referencedTableName: 'lessons',
        referencedColumnNames: ['id'],
      },
    ],
  });

  public static readonly questionTable = new Table({
    name: 'questions',
    columns: [
      MigrationUtil.getIDColumn(),
      MigrationUtil.getVarcharColumn({ name: 'content' }),
      {
        name: 'relation_id',
        type: 'int',
        isNullable: false,
      },
      {
        name: 'score',
        type: 'int',
      },
      {
        name: 'order',
        type: 'int',
      },
      {
        name: 'category_id',
        type: 'int',
      },
      ...MigrationUtil.getCreatedAndUpdatedColumn(),
    ],
    foreignKeys: [
      {
        name: 'FK_Questions_Categories',
        columnNames: ['category_id'],
        referencedTableName: 'categories',
        referencedColumnNames: ['id'],
      },
    ],
  });

  public static readonly answerTable = new Table({
    name: 'answers',
    columns: [
      MigrationUtil.getIDColumn(),
      MigrationUtil.getVarcharColumn({ name: 'content' }),
      {
        name: 'order',
        type: 'int',
      },
      {
        name: 'question_id',
        type: 'int',
      },
      MigrationUtil.getBooleanColumn({
        name: 'is_correct',
        defaultValue: false,
      }),
      ...MigrationUtil.getCreatedAndUpdatedColumn(),
    ],
    foreignKeys: [
      {
        name: 'FK_Answers_Questions',
        columnNames: ['question_id'],
        referencedTableName: 'questions',
        referencedColumnNames: ['id'],
      },
    ],
  });

  public static readonly exampleTable = new Table({
    name: 'examples',
    columns: [
      MigrationUtil.getIDColumn(),
      MigrationUtil.getVarcharColumn({ name: 'content' }),
      MigrationUtil.getVarcharColumn({ name: 'meaning' }),
      {
        name: 'relation_id',
        type: 'int',
      },
      {
        name: 'category_id',
        type: 'int',
      },
      ...MigrationUtil.getCreatedAndUpdatedColumn(),
    ],
    foreignKeys: [
      {
        name: 'FK_Examples_Categories',
        columnNames: ['category_id'],
        referencedTableName: 'categories',
        referencedColumnNames: ['id'],
      },
    ],
  });

  public static readonly examTable = new Table({
    name: 'exams',
    columns: [
      MigrationUtil.getIDColumn(),
      MigrationUtil.getVarcharColumn({ name: 'name' }),
      ...MigrationUtil.getCreatedAndUpdatedColumn(),
    ],
  });

  public static readonly examLibraryTable = new Table({
    name: 'exam_libraries',
    columns: [
      {
        name: 'question_id',
        type: 'int',
      },
      {
        name: 'exam_id',
        type: 'int',
      },
      ...MigrationUtil.getCreatedAndUpdatedColumn(),
    ],
    foreignKeys: [
      {
        name: 'FK_ExamLibraries_Questions',
        columnNames: ['question_id'],
        referencedTableName: 'questions',
        referencedColumnNames: ['id'],
      },
      {
        name: 'FK_ExamLibraries_Exams',
        columnNames: ['exam_id'],
        referencedTableName: 'exams',
        referencedColumnNames: ['id'],
      },
    ],
  });

  public static readonly totalScoreTable = new Table({
    name: 'total_scores',
    columns: [
      {
        name: 'score',
        type: 'int',
      },
      {
        name: 'user_id',
        type: 'int',
      },
      ...MigrationUtil.getCreatedAndUpdatedColumn(),
    ],
    foreignKeys: [
      {
        name: 'FK_TotalScores_Users',
        columnNames: ['user_id'],
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
      },
    ],
  });

  public static readonly scoreTable = new Table({
    name: 'scores',
    columns: [
      {
        name: 'score',
        type: 'int',
      },
      MigrationUtil.getEnumColumn({
        name: 'type',
        enumList: ['exam', 'lesson'],
        enumName: 'scoreType',
        defaultValue: 'exam',
      }),
      {
        name: 'relation_id',
        type: 'int',
      },
      {
        name: 'user_id',
        type: 'int',
      },
      ...MigrationUtil.getCreatedAndUpdatedColumn(),
    ],
    foreignKeys: [
      {
        name: 'FK_Scores_Users',
        columnNames: ['user_id'],
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Create table users.
    await queryRunner.createTable(InitSchema1604108524971.userTable);

    // Create table categories.
    await queryRunner.createTable(InitSchema1604108524971.categoryTable);

    // Create table topics.
    await queryRunner.createTable(InitSchema1604108524971.topicTable);

    // Create table lessons.
    await queryRunner.createTable(InitSchema1604108524971.lessonTable);

    // Create table vocabularies.
    await queryRunner.createTable(InitSchema1604108524971.vocabularyTable);

    // Create table grammars.
    await queryRunner.createTable(InitSchema1604108524971.grammarTable);

    // Create table listenings.
    await queryRunner.createTable(InitSchema1604108524971.listeningTable);

    // Create table conventions.
    await queryRunner.createTable(InitSchema1604108524971.conventionTable);

    // Create table readings.
    await queryRunner.createTable(InitSchema1604108524971.readingTable);

    // Create table questions.
    await queryRunner.createTable(InitSchema1604108524971.questionTable);

    // Create table answers.
    await queryRunner.createTable(InitSchema1604108524971.answerTable);

    // Create table examples.
    await queryRunner.createTable(InitSchema1604108524971.exampleTable);

    // Create table exams.
    await queryRunner.createTable(InitSchema1604108524971.examTable);

    // Create table exam_libraries.
    await queryRunner.createTable(InitSchema1604108524971.examLibraryTable);

    // Create table total_scores.
    await queryRunner.createTable(InitSchema1604108524971.totalScoreTable);

    // Create table scores.
    await queryRunner.createTable(InitSchema1604108524971.scoreTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop table sDrop
    await queryRunner.dropTable(InitSchema1604108524971.scoreTable);

    // Drop table total_scores.
    await queryRunner.dropTable(InitSchema1604108524971.totalScoreTable);

    // Drop table exam_libraries.
    await queryRunner.dropTable(InitSchema1604108524971.examLibraryTable);

    // Drop table exams.
    await queryRunner.dropTable(InitSchema1604108524971.examTable);

    // Drop table examples.
    await queryRunner.dropTable(InitSchema1604108524971.exampleTable);

    // Drop table answers.
    await queryRunner.dropTable(InitSchema1604108524971.answerTable);

    // Drop table questions.
    await queryRunner.dropTable(InitSchema1604108524971.questionTable);

    // Drop table readings.
    await queryRunner.dropTable(InitSchema1604108524971.readingTable);

    // Drop table conventions.
    await queryRunner.dropTable(InitSchema1604108524971.conventionTable);

    // Drop table listenings.
    await queryRunner.dropTable(InitSchema1604108524971.listeningTable);

    // Drop table grammars.
    await queryRunner.dropTable(InitSchema1604108524971.grammarTable);

    // Drop table vocabularies.
    await queryRunner.dropTable(InitSchema1604108524971.vocabularyTable);

    // Drop table lessons.
    await queryRunner.dropTable(InitSchema1604108524971.lessonTable);

    // Drop table topics.
    await queryRunner.dropTable(InitSchema1604108524971.topicTable);

    // Drop table categories.
    await queryRunner.dropTable(InitSchema1604108524971.categoryTable);

    // Drop table users
    await queryRunner.dropTable(InitSchema1604108524971.userTable);
  }
}
